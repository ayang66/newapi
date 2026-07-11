# Codex 与 Claude Code 接入哈基米中转站

本文介绍如何把 Codex 和 Claude Code 接入哈基米中转站。用户只需要在控制台创建自己的 API Key，再按照对应客户端的章节完成配置即可。

## 快速信息

| 项目 | 内容 |
|---|---|
| 接口基址 | `https://brookeapi.cloud/v1` |
| Claude Code 基址 | `https://brookeapi.cloud` |
| 推荐模型 | `gpt-5.5` |
| Claude 推荐模型 | `claude-opus-4-7` / `claude-sonnet-4-6` |
| 认证方式 | 哈基米中转站 API Key |
| 一键安装入口 | `https://brookeapi.cloud/codex-installer` |

## 一、推荐使用方式

- **Codex 桌面客户端**：适合日常开发、代码审查、多任务处理。
- **Cursor / VS Code 安装 Codex 扩展**：适合在编辑器中直接调用 Codex。
- **命令行 Codex CLI**：适合在终端中使用。
- **CC Switch**：适合小白用户管理 Codex、Claude Code、Gemini CLI 等工具配置。

Codex 客户端、CLI、Cursor / VS Code 扩展通常会共用同一套本地配置文件。

## 二、配置文件位置

Codex 的用户配置目录一般是 `.codex`。

| 环境 | 配置目录 |
|---|---|
| Windows 原生 | `C:\Users\你的用户名\.codex` |
| macOS | `/Users/你的用户名/.codex` |
| Linux | `/home/你的用户名/.codex` |
| WSL | `/home/你的Linux用户名/.codex` |

如果你是在 Windows 的 WSL / Linux 环境中使用 Codex，注意要编辑 **WSL 里的 `.codex` 文件夹**，不是 Windows 原生的 `C:\Users\你的用户名\.codex`。

在 Windows 文件资源管理器中，可以通过类似下面的路径打开 WSL 文件：

```text
\\wsl$\Ubuntu\home\你的Linux用户名\.codex
```

如果 `.codex` 文件夹不存在，可以手动新建。

## 三、完整配置文件

进入 `.codex` 文件夹后，创建或编辑下面两个文件：

```text
auth.json
config.toml
```

### 1. auth.json

把 `sk-xxx` 替换成你在哈基米中转站创建的 API Key。

```json
{
  "OPENAI_API_KEY": "sk-xxx"
}
```

说明：

- JSON 文件不能写注释。
- 不要使用中文引号。
- 不要把 API Key 发给他人或提交到项目仓库。

### 2. config.toml

下面是推荐配置，已使用哈基米中转站的接口基址。

```toml
cli_auth_credentials_store = "file"

disable_response_storage = true
model = "gpt-5.5"
model_provider = "hakimi"
model_reasoning_effort = "xhigh"
personality = "friendly"

[model_providers.hakimi]
name = "hakimi"
base_url = "https://brookeapi.cloud/v1"
requires_openai_auth = true
wire_api = "responses"
```

保存后，重启 Codex 客户端、Cursor 或 VS Code，即可开始使用。

如果启动时提示 `disable_response_storage` 是未知配置项，可以删除这一行；它不影响模型接入。模型是否可用以哈基米中转站后台实际支持的模型名称为准。

## 四、推理等级说明

`model_reasoning_effort` 用来控制推理强度，可选值通常为：

```toml
model_reasoning_effort = "xhigh"
model_reasoning_effort = "high"
model_reasoning_effort = "medium"
model_reasoning_effort = "low"
model_reasoning_effort = "minimal"
```

建议：

- 日常开发：`medium` 或 `high`
- 复杂 Bug 修复、架构分析、长任务：`xhigh`
- 简单问答或轻量修改：`low` 或 `minimal`

注意：`xhigh` 是否生效取决于当前模型和上游服务是否支持。

## 五、Windows 一键安装

普通 Windows 用户可以直接打开：

```text
https://brookeapi.cloud/codex-installer
```

这个页面提供：

- Codex Windows x64 安装入口
- 默认安装目录说明：`D:\DevSoftWareTest\codex`
- CC Switch 官方 Windows MSI 下载入口
- 哈基米中转站默认模型配置

## 六、Claude Code 一键安装与配置

### 1. 下载 Windows 中文安装工具

Windows 10 或更高版本用户可以使用下面的项目安装 Claude Code：

```text
https://github.com/lxistired/claude-code-cn-installer
```

项目 ZIP 下载地址：

```text
https://github.com/lxistired/claude-code-cn-installer/archive/refs/heads/main.zip
```

下载并解压后，右键 `一键安装.bat`，选择“以管理员身份运行”。安装工具会自动检查并安装 Node.js、Git 和 Claude Code。

当安装脚本询问智谱模型时，选择“暂时跳过，稍后手动配置”。

> 上游项目目前没有发布独立 EXE/MSI，也没有声明标准开源许可证。本站只提供原项目下载入口，不复制或二次分发作者脚本。

### 2. 配置哈基米中转站

安装完成后运行 `配置API.bat`，选择：

```text
[4] 配置自定义 Anthropic 兼容 API
```

按照提示填写：

| 配置项 | 推荐值 |
|---|---|
| API Base URL | `https://brookeapi.cloud` |
| API Key | 在哈基米中转站创建的 `sk-xxx` 令牌 |
| Opus 模型 | `claude-opus-4-7` |
| Sonnet 模型 | `claude-sonnet-4-6` |
| Haiku 模型 | `claude-sonnet-4-6` |

Claude Code 的 Base URL **不要添加 `/v1`**。客户端会自动请求：

```text
https://brookeapi.cloud/v1/messages
```

### 3. 完整 settings.json

也可以手动创建或编辑：

```text
%USERPROFILE%\.claude\settings.json
```

完整内容如下，把 `sk-xxx` 替换成自己的 API Key：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://brookeapi.cloud",
    "ANTHROPIC_API_KEY": "sk-xxx",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-7",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-6"
  }
}
```

保存后关闭当前终端，重新打开 PowerShell 或 CMD。

### 4. 启动并验证

查看安装版本：

```powershell
claude --version
```

进入项目目录并启动：

```powershell
cd D:\你的项目目录
claude
```

如果能够正常返回内容，并且哈基米中转站后台能看到 `/v1/messages` 调用日志，说明配置成功。

### 5. 使用前确认

- Claude Code 使用 Anthropic Messages 协议，对应接口为 `/v1/messages`。
- 令牌所在分组必须能访问所填写的 Claude 模型。
- Codex 渠道本身不支持 `/v1/messages`，需要使用支持 Claude/Anthropic 协议的渠道。
- 如果后台调整了模型名称，请以模型广场当前显示的名称为准。
- 安装或配置遇到问题，可添加客服微信 `15137315710`，新客可领取五元额度。

## 七、安装 Codex CLI

如果你想在终端中使用 Codex，可以安装 Codex CLI。

### 方式一：官方安装脚本

macOS / Linux：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Windows PowerShell：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

### 方式二：npm 安装

如果使用 npm 安装，需要先安装 Node.js 和 npm。

建议环境：

- Node.js 18+，推荐 Node.js 22 LTS
- npm 10+
- 网络连接正常

安装 Codex：

```bash
npm install -g @openai/codex
```

如果 Linux 下遇到权限问题，可以使用：

```bash
sudo npm install -g @openai/codex
```

验证安装：

```bash
codex --version
```

出现版本号即表示安装完成。

## 八、安装 Node.js

Ubuntu / Debian：

```bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

CentOS / RHEL / Fedora：

```bash
sudo dnf install -y nodejs npm
```

Arch Linux：

```bash
sudo pacman -S nodejs npm
```

验证版本：

```bash
node -v
npm -v
```

## 九、启动 Codex

进入你的项目目录：

```bash
cd /你的项目路径
```

启动 Codex：

```bash
codex
```

首次启动后，可以输入一句简单测试：

```text
请帮我写一个 Node.js 的 hello world 示例
```

如果能够正常返回，并且哈基米中转站后台能看到调用记录，说明配置成功。

## 十、常见命令参考

| 命令 | 描述 |
|---|---|
| `/model` | 切换模型和推理级别 |
| `/permissions` | 调整 Codex 的权限模式 |
| `/init` | 生成 `AGENTS.md` 项目指令文件 |
| `/status` | 查看当前会话配置、模型、权限和上下文使用情况 |
| `/diff` | 查看当前项目改动 |
| `/review` | 让 Codex 审查当前改动 |
| `/clear` | 清空当前会话并开始新对话 |
| `/new` | 在当前 CLI 中开启新会话 |
| `/compact` | 压缩长对话上下文 |
| `/mcp` | 查看 MCP 工具状态 |
| `/quit` | 退出 Codex CLI |

## 十一、常见问题

### 1. 找不到 `.codex` 文件夹

手动创建即可。Windows 中注意开启“显示隐藏的项目”。

### 2. 配置后不生效

确认你编辑的是当前运行环境对应的 `.codex`。Windows 原生和 WSL 的配置目录不是同一个。

### 3. 提示模型不存在

检查 `model = "gpt-5.5"` 是否为哈基米中转站后台支持的模型名称。也可以在哈基米中转站控制台查看可用模型后替换。

### 4. 提示认证失败或 401

检查 `auth.json` 中的 API Key 是否正确，是否有多余空格，JSON 格式是否有效。

### 5. 请求失败或连接失败

检查 `base_url` 是否正确：

```toml
base_url = "https://brookeapi.cloud/v1"
```

也可以用下面的地址作为 OpenAI 兼容接口基址：

```text
https://brookeapi.cloud/v1
```

## 十二、官方参考

- [Codex 官方文档](https://developers.openai.com/codex)
- [Codex 快速开始](https://developers.openai.com/codex/quickstart)
- [Codex 配置说明](https://developers.openai.com/codex/config-basic)
- [Codex 配置参考](https://developers.openai.com/codex/config-reference)
- [CC Switch 官网](https://ccswitch.io)
- [CC Switch GitHub Releases](https://github.com/farion1231/cc-switch/releases)
- [Claude Code 中文安装工具](https://github.com/lxistired/claude-code-cn-installer)
