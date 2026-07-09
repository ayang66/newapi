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
} from '@douyinfe/semi-icons';

const CODEX_MSI_URL = 'https://codexapp.agentsmirror.com/latest/win-x64';
const DEFAULT_INSTALL_DIR = 'D:\\DevSoftWareTest\\codex';
const DEFAULT_BASE_URL = 'https://brookeapi.cloud/v1';
const DEFAULT_MODEL = 'gpt-5.5';

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
                Codex 一键安装
              </h1>
              <p className='mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-zinc-300'>
                面向普通 Windows 用户的安装入口。安装器会下载 Codex
                MSI，支持自定义安装目录，并写入哈基米中转站模型配置；需要时也可以启动本地
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
                  下载 Windows x64 安装包
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
