/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React from 'react';
import { Button } from '@douyinfe/semi-ui';
import {
  IconDownload,
  IconDesktop,
  IconSetting,
  IconCode,
  IconBolt,
  IconLink,
} from '@douyinfe/semi-icons';
import { copy, showError, showSuccess } from '../../helpers';

const CODEX_MSI_URL = 'https://codexapp.agentsmirror.com/latest/win-x64';
const CCSWITCH_MSI_URL =
  'https://github.com/farion1231/cc-switch/releases/download/v3.16.5/CC-Switch-v3.16.5-Windows.msi';
const CCSWITCH_RELEASE_URL =
  'https://github.com/farion1231/cc-switch/releases/tag/v3.16.5';
const CLAUDE_INSTALLER_REPO_URL =
  'https://github.com/lxistired/claude-code-cn-installer';
const CLAUDE_INSTALLER_ZIP_URL =
  'https://github.com/lxistired/claude-code-cn-installer/archive/refs/heads/main.zip';
const DEFAULT_INSTALL_DIR = 'D:\\DevSoftWareTest\\codex';
const DEFAULT_BASE_URL = 'https://brookeapi.cloud/v1';
const DEFAULT_MODEL = 'gpt-5.5';
const DEFAULT_CLAUDE_BASE_URL = 'https://brookeapi.cloud';
const DEFAULT_CLAUDE_OPUS_MODEL = 'claude-opus-4-7';
const DEFAULT_CLAUDE_SONNET_MODEL = 'claude-sonnet-4-6';
const CUSTOMER_WECHAT = '15137315710';

const FeatureCard = ({ icon, title, description }) => (
  <div className='rounded-lg border border-semi-color-border bg-semi-color-bg-1 p-5 shadow-sm'>
    <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'>
      {icon}
    </div>
    <h3 className='mb-2 text-base font-semibold text-semi-color-text-0'>
      {title}
    </h3>
    <p className='m-0 text-sm leading-6 text-semi-color-text-2'>
      {description}
    </p>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className='flex flex-col gap-1 rounded-lg border border-semi-color-border bg-semi-color-bg-0 px-4 py-3 sm:flex-row sm:items-center sm:justify-between'>
    <span className='text-sm font-medium text-semi-color-text-2'>{label}</span>
    <code className='break-all rounded bg-semi-color-fill-0 px-2 py-1 text-sm text-semi-color-text-0'>
      {value}
    </code>
  </div>
);

const CodeBlock = ({ title, children }) => (
  <div className='overflow-hidden rounded-lg border border-semi-color-border'>
    <div className='border-b border-semi-color-border bg-semi-color-fill-0 px-4 py-2 text-sm font-semibold text-semi-color-text-1'>
      {title}
    </div>
    <pre className='m-0 overflow-x-auto bg-zinc-950 p-4 text-sm leading-6 text-zinc-100'>
      <code>{children}</code>
    </pre>
  </div>
);

const CodexInstaller = () => {
  const copyCustomerWechat = async () => {
    if (await copy(CUSTOMER_WECHAT)) {
      showSuccess('客服微信已复制');
    } else {
      showError('复制失败，请手动复制客服微信');
    }
  };

  return (
    <div className='classic-page-fill min-h-screen bg-semi-color-bg-0 px-4 pb-16 pt-[88px]'>
      <main className='mx-auto max-w-6xl'>
        <section className='overflow-hidden rounded-2xl border border-semi-color-border bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 p-6 shadow-sm dark:from-zinc-900 dark:via-emerald-950/40 dark:to-zinc-900 md:p-9'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-sm font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-zinc-900/80 dark:text-emerald-300'>
            <IconBolt size={14} />
            Windows 桌面安装器
          </div>
          <div className='grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
            <div>
              <h1 className='m-0 text-3xl font-bold leading-tight text-slate-950 dark:text-zinc-50 md:text-4xl'>
                AI 编程工具一键安装
              </h1>
              <p className='mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-zinc-300'>
                面向普通 Windows 用户的安装入口。这里集中提供 Codex、Claude Code
                和 CC Switch 的安装方式，并给出哈基米中转站对应的模型配置。Codex
                安装器支持自定义目录，需要时也可以启动本地
                <code className='mx-1 rounded bg-white/70 px-1.5 py-0.5 text-sm dark:bg-zinc-800'>
                  third\codex++
                </code>
                下的 Codex++ 管理器。
              </p>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <Button
                  theme='solid'
                  type='primary'
                  size='large'
                  icon={<IconDownload />}
                  onClick={() => window.open(CODEX_MSI_URL, '_blank')}
                >
                  一键安装 Codex
                </Button>
                <Button
                  theme='outline'
                  type='primary'
                  size='large'
                  icon={<IconDownload />}
                  onClick={() =>
                    window.open(CLAUDE_INSTALLER_ZIP_URL, '_blank')
                  }
                >
                  下载 Claude Code 安装工具
                </Button>
                <Button
                  theme='outline'
                  type='primary'
                  size='large'
                  icon={<IconDownload />}
                  onClick={() => window.open(CCSWITCH_MSI_URL, '_blank')}
                >
                  下载 CC Switch
                </Button>
                <Button
                  theme='outline'
                  type='tertiary'
                  size='large'
                  onClick={() => window.open('/about', '_blank')}
                >
                  查看 Codex 配置教程
                </Button>
              </div>
            </div>

            <div className='rounded-xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/75'>
              <div className='mb-3 text-sm font-semibold text-semi-color-text-1'>
                默认配置
              </div>
              <div className='space-y-3'>
                <InfoRow label='安装目录' value={DEFAULT_INSTALL_DIR} />
                <InfoRow label='接口基址' value={DEFAULT_BASE_URL} />
                <InfoRow label='默认模型' value={DEFAULT_MODEL} />
                <InfoRow label='Claude Code' value='Windows 中文安装脚本' />
                <InfoRow label='CC Switch' value='v3.16.5 Windows MSI' />
              </div>
            </div>
          </div>
        </section>

        <section className='mt-6 grid gap-4 md:grid-cols-3'>
          <FeatureCard
            icon={<IconDownload size={20} />}
            title='自动下载并静默安装'
            description='从 agentsmirror 的 Windows x64 地址下载 Codex MSI，并通过 msiexec 静默安装，减少用户手动选择步骤。'
          />
          <FeatureCard
            icon={<IconDesktop size={20} />}
            title='支持自定义安装目录'
            description='默认安装到 D:\\DevSoftWareTest\\codex。安装前会自动创建目录，用户也可以在安装器中改成自己的路径。'
          />
          <FeatureCard
            icon={<IconSetting size={20} />}
            title='写入模型配置'
            description='安装器支持填写模型供应商、Base URL、SK 密钥和模型名称，并生成 Codex 所需的 auth.json 与 config.toml。'
          />
        </section>

        <section className='mt-6 rounded-xl border border-semi-color-border bg-semi-color-bg-1 p-6 shadow-sm'>
          <div className='mb-5 flex items-center gap-2'>
            <IconCode className='text-emerald-600' />
            <h2 className='m-0 text-xl font-semibold text-semi-color-text-0'>
              Claude Code 一键安装
            </h2>
          </div>
          <p className='mt-0 text-sm leading-6 text-semi-color-text-2'>
            本站接入
            <a
              className='mx-1 text-semi-color-primary hover:underline'
              href={CLAUDE_INSTALLER_REPO_URL}
              target='_blank'
              rel='noreferrer'
            >
              lxistired/claude-code-cn-installer
            </a>
            的原始项目下载地址。该工具会自动检查并安装 Node.js、Git、Claude
            Code，并提供自定义 Anthropic 兼容 API 配置入口。
          </p>

          <div className='mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='space-y-3'>
              <InfoRow label='系统要求' value='Windows 10 或更高版本' />
              <InfoRow label='接口基址' value={DEFAULT_CLAUDE_BASE_URL} />
              <InfoRow label='请求接口' value='/v1/messages' />
              <InfoRow label='Opus 模型' value={DEFAULT_CLAUDE_OPUS_MODEL} />
              <InfoRow
                label='Sonnet 模型'
                value={DEFAULT_CLAUDE_SONNET_MODEL}
              />
            </div>

            <div className='rounded-lg border border-semi-color-border bg-semi-color-bg-0 p-5'>
              <h3 className='m-0 text-base font-semibold text-semi-color-text-0'>
                安装与配置步骤
              </h3>
              <ol className='mb-0 mt-3 space-y-2 pl-5 text-sm leading-6 text-semi-color-text-2'>
                <li>下载并解压项目 ZIP，以管理员身份运行“一键安装.bat”。</li>
                <li>安装脚本询问智谱模型时选择“暂时跳过”。</li>
                <li>
                  安装完成后运行“配置API.bat”，选择菜单 4“自定义 Anthropic 兼容
                  API”。
                </li>
                <li>Base URL 填写本站地址，API Key 填写自己创建的令牌。</li>
                <li>按照下方推荐值填写 Opus、Sonnet 和 Haiku 模型名称。</li>
              </ol>
              <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
                <Button
                  theme='solid'
                  type='primary'
                  icon={<IconDownload />}
                  onClick={() =>
                    window.open(CLAUDE_INSTALLER_ZIP_URL, '_blank')
                  }
                >
                  下载项目 ZIP
                </Button>
                <Button
                  theme='outline'
                  type='tertiary'
                  icon={<IconLink />}
                  onClick={() =>
                    window.open(CLAUDE_INSTALLER_REPO_URL, '_blank')
                  }
                >
                  查看原项目
                </Button>
              </div>
            </div>
          </div>

          <div className='mt-5 grid gap-4 lg:grid-cols-2'>
            <CodeBlock title='.claude/settings.json 推荐配置'>
              {`{
  "env": {
    "ANTHROPIC_BASE_URL": "${DEFAULT_CLAUDE_BASE_URL}",
    "ANTHROPIC_API_KEY": "sk-xxx",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "${DEFAULT_CLAUDE_OPUS_MODEL}",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "${DEFAULT_CLAUDE_SONNET_MODEL}",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "${DEFAULT_CLAUDE_SONNET_MODEL}"
  }
}`}
            </CodeBlock>
            <div className='rounded-lg border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100'>
              <h3 className='m-0 text-base font-semibold'>使用前确认</h3>
              <p className='mb-0 mt-2'>
                Claude Code 使用 Anthropic Messages 协议。本站必须存在支持
                <code className='mx-1 rounded bg-white/70 px-1.5 py-0.5 dark:bg-zinc-900/60'>
                  /v1/messages
                </code>
                的 Claude 渠道，并且令牌所在分组可以访问所填模型。Codex
                渠道本身不支持这个接口；模型调整后请以模型广场显示的名称为准。
              </p>
              <p className='mb-0 mt-3'>
                上游仓库当前没有发布独立
                EXE/MSI，也没有声明标准开源许可证，因此本站只提供原仓库下载入口，不复制或二次分发作者脚本。
              </p>
              <p className='mb-0 mt-3'>
                安装或配置遇到问题，可添加客服微信：
                <button
                  type='button'
                  onClick={copyCustomerWechat}
                  className='ml-1 border-0 bg-transparent p-0 font-semibold text-amber-950 underline decoration-dotted underline-offset-4 cursor-pointer dark:text-amber-100'
                  title='复制客服微信'
                >
                  {CUSTOMER_WECHAT}
                </button>
                <span className='ml-1 font-semibold'>，新客领五元额度</span>
              </p>
            </div>
          </div>
        </section>

        <section className='mt-6 rounded-xl border border-semi-color-border bg-semi-color-bg-1 p-6 shadow-sm'>
          <div className='mb-5 flex items-center gap-2'>
            <IconLink className='text-emerald-600' />
            <h2 className='m-0 text-xl font-semibold text-semi-color-text-0'>
              CC Switch 一键安装
            </h2>
          </div>
          <p className='mt-0 text-sm leading-6 text-semi-color-text-2'>
            CC Switch 是一个用于管理 Codex、Claude Code、Gemini CLI
            等开发工具配置的桌面客户端。本站接入官方 GitHub Release
            下载地址，不使用第三方安装包。
          </p>
          <div className='mt-5 grid gap-4 lg:grid-cols-2'>
            <div className='space-y-3'>
              <InfoRow label='官方主页' value='https://ccswitch.io' />
              <InfoRow label='官方仓库' value='farion1231/cc-switch' />
              <InfoRow label='当前版本' value='v3.16.5' />
              <InfoRow
                label='Windows 安装包'
                value='CC-Switch-v3.16.5-Windows.msi'
              />
            </div>
            <div className='flex flex-col justify-between gap-4 rounded-lg border border-semi-color-border bg-semi-color-bg-0 p-5'>
              <div>
                <h3 className='m-0 text-base font-semibold text-semi-color-text-0'>
                  推荐给小白用户
                </h3>
                <p className='mb-0 mt-2 text-sm leading-6 text-semi-color-text-2'>
                  用户可以先安装 Codex，再安装 CC Switch，用 CC Switch 导入本站
                  API Key 和模型配置，减少手动编辑配置文件的步骤。
                </p>
              </div>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <Button
                  theme='solid'
                  type='primary'
                  icon={<IconDownload />}
                  onClick={() => window.open(CCSWITCH_MSI_URL, '_blank')}
                >
                  下载 CC Switch MSI
                </Button>
                <Button
                  theme='outline'
                  type='tertiary'
                  onClick={() => window.open(CCSWITCH_RELEASE_URL, '_blank')}
                >
                  查看官方 Release
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-6 rounded-xl border border-semi-color-border bg-semi-color-bg-1 p-6 shadow-sm'>
          <h2 className='m-0 text-xl font-semibold text-semi-color-text-0'>
            安装器执行流程
          </h2>
          <div className='mt-5 grid gap-4 lg:grid-cols-2'>
            <div className='space-y-3'>
              <InfoRow label='Codex MSI 下载地址' value={CODEX_MSI_URL} />
              <InfoRow label='默认安装目录' value={DEFAULT_INSTALL_DIR} />
              <InfoRow label='Codex++ 管理器目录' value='third\\codex++' />
            </div>
            <CodeBlock title='静默安装命令示例'>
              {`mkdir "${DEFAULT_INSTALL_DIR}"
msiexec /i codex-win-x64.msi /qn INSTALLDIR="${DEFAULT_INSTALL_DIR}"`}
            </CodeBlock>
          </div>
        </section>

        <section className='mt-6 rounded-xl border border-semi-color-border bg-semi-color-bg-1 p-6 shadow-sm'>
          <div className='mb-5 flex items-center gap-2'>
            <IconCode className='text-emerald-600' />
            <h2 className='m-0 text-xl font-semibold text-semi-color-text-0'>
              写入的 Codex 配置
            </h2>
          </div>
          <div className='grid gap-4 lg:grid-cols-2'>
            <CodeBlock title='auth.json'>
              {`{
  "OPENAI_API_KEY": "sk-xxx"
}`}
            </CodeBlock>
            <CodeBlock title='config.toml'>
              {`cli_auth_credentials_store = "file"

disable_response_storage = true
model = "${DEFAULT_MODEL}"
model_provider = "hakimi"
model_reasoning_effort = "xhigh"
personality = "friendly"

[model_providers.hakimi]
name = "hakimi"
base_url = "${DEFAULT_BASE_URL}"
requires_openai_auth = true
wire_api = "responses"`}
            </CodeBlock>
          </div>
          <p className='mb-0 mt-4 text-sm leading-6 text-semi-color-text-2'>
            用户只需要把
            <code className='mx-1 rounded bg-semi-color-fill-0 px-1.5 py-0.5'>
              sk-xxx
            </code>
            替换成自己在哈基米中转站创建的 API Key。如果后台模型名称不是
            <code className='mx-1 rounded bg-semi-color-fill-0 px-1.5 py-0.5'>
              {DEFAULT_MODEL}
            </code>
            ，在安装器里改成实际可用模型即可。
          </p>
        </section>
      </main>
    </div>
  );
};

export default CodexInstaller;
