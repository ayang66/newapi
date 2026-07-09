<style>
  .hakimi-doc {
    max-width: 1080px;
    margin: 0 auto;
    padding: 24px 16px 56px;
    color: #172033;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.75;
  }
  .hakimi-doc * {
    box-sizing: border-box;
  }
  .hakimi-hero {
    border: 1px solid #d8e2ef;
    border-radius: 14px;
    padding: 30px;
    background: linear-gradient(135deg, #f7fbff 0%, #eef7f2 52%, #fff8ea 100%);
    box-shadow: 0 12px 34px rgba(30, 64, 100, 0.08);
  }
  .hakimi-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    background: #ffffff;
    border: 1px solid #d6e3ef;
    color: #31685d;
    font-size: 13px;
    font-weight: 700;
  }
  .hakimi-hero h1 {
    margin: 0;
    color: #132238;
    font-size: 34px;
    line-height: 1.22;
    letter-spacing: 0;
  }
  .hakimi-hero p {
    max-width: 780px;
    margin: 14px 0 0;
    color: #44546a;
    font-size: 16px;
  }
  .hakimi-quick {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 22px;
  }
  .hakimi-chip {
    min-height: 84px;
    padding: 14px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid #dbe6f1;
  }
  .hakimi-chip b {
    display: block;
    color: #172033;
    font-size: 14px;
  }
  .hakimi-chip span {
    display: block;
    margin-top: 4px;
    color: #536276;
    font-size: 13px;
    overflow-wrap: anywhere;
  }
  .hakimi-section {
    margin-top: 22px;
    padding: 24px;
    border: 1px solid #e0e7ef;
    border-radius: 14px;
    background: #ffffff;
  }
  .hakimi-section h2 {
    margin: 0 0 12px;
    color: #162338;
    font-size: 23px;
    line-height: 1.35;
    letter-spacing: 0;
  }
  .hakimi-section h3 {
    margin: 22px 0 8px;
    color: #20304a;
    font-size: 17px;
    letter-spacing: 0;
  }
  .hakimi-section p {
    margin: 8px 0;
    color: #44546a;
  }
  .hakimi-section ul,
  .hakimi-section ol {
    margin: 8px 0 0;
    padding-left: 22px;
    color: #44546a;
  }
  .hakimi-section li {
    margin: 4px 0;
  }
  .hakimi-path-table,
  .hakimi-command-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
    overflow: hidden;
    border-radius: 10px;
    font-size: 14px;
  }
  .hakimi-path-table th,
  .hakimi-path-table td,
  .hakimi-command-table th,
  .hakimi-command-table td {
    padding: 11px 12px;
    border: 1px solid #e1e8f0;
    text-align: left;
    vertical-align: top;
  }
  .hakimi-path-table th,
  .hakimi-command-table th {
    background: #f5f8fb;
    color: #23324a;
  }
  .hakimi-code-title {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin-top: 16px;
    padding: 10px 12px;
    border: 1px solid #d9e3ef;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    background: #f5f8fb;
    color: #23324a;
    font-size: 13px;
    font-weight: 700;
  }
  .hakimi-code-title span {
    color: #6b778a;
    font-weight: 500;
  }
  .hakimi-doc pre {
    margin: 0 0 14px;
    padding: 16px;
    overflow-x: auto;
    border: 1px solid #d9e3ef;
    border-radius: 0 0 10px 10px;
    background: #101827;
    color: #e8eef7;
    font-size: 14px;
    line-height: 1.65;
    white-space: pre;
  }
  .hakimi-doc code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  }
  .hakimi-inline-code {
    padding: 2px 6px;
    border-radius: 6px;
    background: #eef3f8;
    color: #20304a;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: 0.92em;
  }
  .hakimi-note {
    margin-top: 14px;
    padding: 14px 16px;
    border-left: 4px solid #2f8f7a;
    border-radius: 10px;
    background: #f0faf6;
    color: #36564e;
  }
  .hakimi-warning {
    margin-top: 14px;
    padding: 14px 16px;
    border-left: 4px solid #c8782a;
    border-radius: 10px;
    background: #fff8ed;
    color: #68481f;
  }
  .hakimi-footer {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid #e1e8f0;
    color: #69788c;
    font-size: 13px;
  }
  .hakimi-doc a {
    color: #1769aa;
    text-decoration: none;
  }
  .hakimi-doc a:hover {
    text-decoration: underline;
  }
  @media (max-width: 760px) {
    .hakimi-doc {
      padding: 14px 10px 36px;
    }
    .hakimi-hero,
    .hakimi-section {
      padding: 18px;
      border-radius: 12px;
    }
    .hakimi-hero h1 {
      font-size: 27px;
    }
    .hakimi-quick {
      grid-template-columns: 1fr;
    }
    .hakimi-path-table,
    .hakimi-command-table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
</style>

<main class="hakimi-doc">
  <section class="hakimi-hero">
    <div class="hakimi-kicker">哈基米中转站 · Codex 接入教程</div>
    <h1>在 Codex 中接入哈基米中转站</h1>
    <p>推荐使用 Codex 桌面客户端，或在 Cursor / VS Code 中安装 Codex 扩展使用。下面的配置会把 Codex 请求转发到哈基米中转站，用户只需要替换自己的 API Key 即可。</p>
    <div class="hakimi-quick">
      <div class="hakimi-chip">
        <b>接口基址</b>
        <span>https://brookeapi.cloud/v1</span>
      </div>
      <div class="hakimi-chip">
        <b>推荐模型</b>
        <span>gpt-5.5</span>
      </div>
      <div class="hakimi-chip">
        <b>认证方式</b>
        <span>哈基米中转站 API Key</span>
      </div>
    </div>
  </section>

  <section class="hakimi-section">
    <h2>一、适用方式</h2>
    <p>以下方式通常共用同一套本地配置文件，所以配置一次后，Codex 客户端、CLI、Cursor / VS Code 扩展都可以使用。</p>
    <ul>
      <li><strong>Codex 桌面客户端：</strong>适合日常开发、代码审查、多任务处理。</li>
      <li><strong>Cursor / VS Code Codex 扩展：</strong>适合在编辑器里直接调用 Codex。</li>
      <li><strong>Codex CLI：</strong>适合在终端中进入项目目录后使用。</li>
    </ul>
  </section>

  <section class="hakimi-section">
    <h2>二、配置目录位置</h2>
    <p>Codex 的用户配置目录一般叫 <span class="hakimi-inline-code">.codex</span>。如果文件夹不存在，可以手动新建。</p>
    <table class="hakimi-path-table">
      <thead>
        <tr>
          <th>环境</th>
          <th>配置目录</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Windows 原生</td>
          <td><code>C:\Users\你的用户名\.codex</code></td>
        </tr>
        <tr>
          <td>macOS</td>
          <td><code>/Users/你的用户名/.codex</code></td>
        </tr>
        <tr>
          <td>Linux</td>
          <td><code>/home/你的用户名/.codex</code></td>
        </tr>
        <tr>
          <td>WSL</td>
          <td><code>/home/你的Linux用户名/.codex</code></td>
        </tr>
      </tbody>
    </table>
    <div class="hakimi-note">如果你在 Windows 的 WSL / Linux 环境中使用 Codex，请编辑 WSL 里的 <span class="hakimi-inline-code">.codex</span>，不是 Windows 原生的 <span class="hakimi-inline-code">C:\Users\你的用户名\.codex</span>。</div>
    <div class="hakimi-code-title">Windows 资源管理器打开 WSL 配置目录 <span>示例</span></div>
    <pre><code>\\wsl$\Ubuntu\home\你的Linux用户名\.codex</code></pre>
  </section>

  <section class="hakimi-section">
    <h2>三、完整配置文件</h2>
    <p>进入 <span class="hakimi-inline-code">.codex</span> 文件夹后，创建或编辑下面两个文件：</p>
    <ul>
      <li><span class="hakimi-inline-code">auth.json</span></li>
      <li><span class="hakimi-inline-code">config.toml</span></li>
    </ul>

    <h3>1. auth.json</h3>
    <p>把 <span class="hakimi-inline-code">sk-xxx</span> 替换成你在哈基米中转站创建的 API Key。</p>
    <div class="hakimi-code-title">auth.json <span>完整内容</span></div>
    <pre><code>{
  "OPENAI_API_KEY": "sk-xxx"
}</code></pre>

    <div class="hakimi-warning">JSON 文件不能写注释，不能使用中文引号，也不要把 API Key 发给他人或提交到项目仓库。</div>

    <h3>2. config.toml</h3>
    <p>下面是推荐配置，已使用哈基米中转站的接口基址。</p>
    <div class="hakimi-code-title">config.toml <span>完整内容</span></div>
    <pre><code>cli_auth_credentials_store = "file"

disable_response_storage = true
model = "gpt-5.5"
model_provider = "hakimi"
model_reasoning_effort = "xhigh"
personality = "friendly"

[model_providers.hakimi]
name = "hakimi"
base_url = "https://brookeapi.cloud/v1"
requires_openai_auth = true
wire_api = "responses"</code></pre>

    <p>保存后，重启 Codex 客户端、Cursor 或 VS Code。模型是否可用以哈基米中转站后台实际支持的模型名称为准。</p>
    <div class="hakimi-note">如果启动时提示 <span class="hakimi-inline-code">disable_response_storage</span> 是未知配置项，可以删除这一行；它不影响模型接入。</div>
  </section>

  <section class="hakimi-section">
    <h2>四、推理等级说明</h2>
    <p><span class="hakimi-inline-code">model_reasoning_effort</span> 用来控制推理强度。常见可选值如下：</p>
    <div class="hakimi-code-title">推理等级可选值 <span>按强到弱</span></div>
    <pre><code>model_reasoning_effort = "xhigh"
model_reasoning_effort = "high"
model_reasoning_effort = "medium"
model_reasoning_effort = "low"
model_reasoning_effort = "minimal"</code></pre>
    <ul>
      <li><strong>日常开发：</strong>建议使用 <span class="hakimi-inline-code">medium</span> 或 <span class="hakimi-inline-code">high</span>。</li>
      <li><strong>复杂 Bug 修复、架构分析、长任务：</strong>建议使用 <span class="hakimi-inline-code">xhigh</span>。</li>
      <li><strong>简单问答或轻量修改：</strong>建议使用 <span class="hakimi-inline-code">low</span> 或 <span class="hakimi-inline-code">minimal</span>。</li>
    </ul>
    <div class="hakimi-warning"><span class="hakimi-inline-code">xhigh</span> 是否生效取决于当前模型和上游服务是否支持。</div>
  </section>

  <section class="hakimi-section">
    <h2>五、安装 Codex CLI</h2>
    <h3>方式一：官方安装脚本</h3>
    <div class="hakimi-code-title">macOS / Linux</div>
    <pre><code>curl -fsSL https://chatgpt.com/codex/install.sh | sh</code></pre>
    <div class="hakimi-code-title">Windows PowerShell</div>
    <pre><code>powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"</code></pre>

    <h3>方式二：npm 安装</h3>
    <p>如果使用 npm 安装，需要先安装 Node.js 和 npm。建议 Node.js 18+，推荐 Node.js 22 LTS。</p>
    <div class="hakimi-code-title">安装 Codex</div>
    <pre><code>npm install -g @openai/codex</code></pre>
    <div class="hakimi-code-title">Linux 权限不足时</div>
    <pre><code>sudo npm install -g @openai/codex</code></pre>
    <div class="hakimi-code-title">验证安装</div>
    <pre><code>codex --version</code></pre>
  </section>

  <section class="hakimi-section">
    <h2>六、安装 Node.js</h2>
    <div class="hakimi-code-title">Ubuntu / Debian</div>
    <pre><code>sudo apt update
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs</code></pre>
    <div class="hakimi-code-title">CentOS / RHEL / Fedora</div>
    <pre><code>sudo dnf install -y nodejs npm</code></pre>
    <div class="hakimi-code-title">Arch Linux</div>
    <pre><code>sudo pacman -S nodejs npm</code></pre>
    <div class="hakimi-code-title">验证版本</div>
    <pre><code>node -v
npm -v</code></pre>
  </section>

  <section class="hakimi-section">
    <h2>七、启动和测试</h2>
    <p>进入你的项目目录后启动 Codex。</p>
    <div class="hakimi-code-title">启动 Codex</div>
    <pre><code>cd /你的项目路径
codex</code></pre>
    <p>首次启动后，可以输入一句简单测试：</p>
    <div class="hakimi-code-title">测试输入</div>
    <pre><code>请帮我写一个 Node.js 的 hello world 示例</code></pre>
    <p>如果能够正常返回，并且哈基米中转站后台能看到调用记录，说明配置成功。</p>
  </section>

  <section class="hakimi-section">
    <h2>八、常用命令</h2>
    <table class="hakimi-command-table">
      <thead>
        <tr>
          <th>命令</th>
          <th>作用</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>/model</code></td><td>切换模型和推理级别</td></tr>
        <tr><td><code>/permissions</code></td><td>调整 Codex 的权限模式</td></tr>
        <tr><td><code>/init</code></td><td>生成 <code>AGENTS.md</code> 项目指令文件</td></tr>
        <tr><td><code>/status</code></td><td>查看当前会话配置、模型、权限和上下文使用情况</td></tr>
        <tr><td><code>/diff</code></td><td>查看当前项目改动</td></tr>
        <tr><td><code>/review</code></td><td>让 Codex 审查当前改动</td></tr>
        <tr><td><code>/clear</code></td><td>清空当前会话并开始新对话</td></tr>
        <tr><td><code>/new</code></td><td>在当前 CLI 中开启新会话</td></tr>
        <tr><td><code>/compact</code></td><td>压缩长对话上下文</td></tr>
        <tr><td><code>/mcp</code></td><td>查看 MCP 工具状态</td></tr>
        <tr><td><code>/quit</code></td><td>退出 Codex CLI</td></tr>
      </tbody>
    </table>
  </section>

  <section class="hakimi-section">
    <h2>九、常见问题</h2>
    <h3>1. 找不到 .codex 文件夹</h3>
    <p>手动创建即可。Windows 中注意开启“显示隐藏的项目”。</p>

    <h3>2. 配置后不生效</h3>
    <p>确认你编辑的是当前运行环境对应的 <span class="hakimi-inline-code">.codex</span>。Windows 原生和 WSL 的配置目录不是同一个。</p>

    <h3>3. 提示模型不存在</h3>
    <p>检查 <span class="hakimi-inline-code">model = "gpt-5.5"</span> 是否为哈基米中转站后台支持的模型名称，也可以在控制台查看可用模型后替换。</p>

    <h3>4. 提示认证失败或 401</h3>
    <p>检查 <span class="hakimi-inline-code">auth.json</span> 中的 API Key 是否正确，是否有多余空格，JSON 格式是否有效。</p>

    <h3>5. 请求失败或连接失败</h3>
    <p>检查接口基址是否正确：</p>
    <div class="hakimi-code-title">OpenAI 兼容接口基址</div>
    <pre><code>https://brookeapi.cloud/v1</code></pre>
  </section>

  <section class="hakimi-section">
    <h2>十、官方参考</h2>
    <ul>
      <li><a href="https://developers.openai.com/codex" target="_blank" rel="noopener noreferrer">Codex 官方文档</a></li>
      <li><a href="https://developers.openai.com/codex/quickstart" target="_blank" rel="noopener noreferrer">Codex 快速开始</a></li>
      <li><a href="https://developers.openai.com/codex/config-basic" target="_blank" rel="noopener noreferrer">Codex 配置说明</a></li>
      <li><a href="https://developers.openai.com/codex/config-reference" target="_blank" rel="noopener noreferrer">Codex 配置参考</a></li>
    </ul>
    <div class="hakimi-footer">哈基米中转站 · brookeapi.cloud · 本页面用于帮助用户把 Codex 接入哈基米中转站。</div>
  </section>
</main>
