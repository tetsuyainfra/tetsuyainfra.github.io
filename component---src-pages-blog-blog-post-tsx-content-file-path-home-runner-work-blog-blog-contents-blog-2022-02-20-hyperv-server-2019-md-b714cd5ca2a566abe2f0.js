"use strict";(self.webpackChunktetsuyainfra_s_hideout=self.webpackChunktetsuyainfra_s_hideout||[]).push([[87],{2190:function(e,n,t){t.r(n),t.d(n,{BlogPost:function(){return d},Head:function(){return h},default:function(){return m}});var l=t(1151),r=t(7294);function a(e){const n=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h2,null,"注意"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"GUI はない"),"\n",r.createElement(n.li,null,"リモート管理が前提"),"\n",r.createElement(n.li,null,"おうちで使ってみる場合、インストールメディア(USB メモリ)に一緒に WindowsAdminCenter の MSI を保存 → そのままインストール","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"ブラウザから設定が一番楽ではないか"),"\n"),"\n"),"\n"),"\n",r.createElement(n.h2,null,"参考"),"\n",r.createElement(n.h2,null,"準備物"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"公式 ISO\nhttps://www.microsoft.com/ja-jp/evalcenter/evaluate-hyper-v-server-2019"),"\n"),"\n",r.createElement(n.h2,null,"インストール"),"\n",r.createElement(n.p,null,"普通のインストールと同じであるちょっとだけスクリーンショットを"),"\n",r.createElement(n.h2,null,"OpenSSH Server for Windows を有効化する"),"\n",r.createElement(n.p,null,"https://docs.microsoft.com/ja-jp/windows-server/administration/openssh/openssh_install_firstuse"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'> Get-WindowsCapability -Online | Where-Object Name -Like "OpenSSH*"\n> Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0\nPath          :\nOnline        : True\nRestartNeeded : False\n\n> Start-Service sshd\n> Set-Service -Name sshd -StartupType \'Automatic\'\n\n# 確認\n> Get-NetFirewallRule -Name "OpenSSH*"\n# 作成と有効化(とりあえずデフォルトで有効になっている模様)\n> New-NetFirewallRule -Name \'OpenSSH-Server-In-TCP\' -DisplayName \'OpenSSH Server (sshd)\' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22\n\n# C:\\ProgramData\\ssh\\sshd_configをnotepadで編集する(CLIで使えるテキストエディタが無いのでRemoteDesktopでアクセス)\n# 下を追記してRootLoginを禁止する\nDenyUsers administrator\n# DenyGroups Administratorsはどうなのかな・・・\n\n> Restart-Service sshd\n\n# 公開鍵認証も追加すればいける\n> mkdir .ssh\n> echo ssh-ed25519 HOGEHOGE >> .ssh/authorized_keys\n\n# sshd_configにAdministratorsグループに対する設定があるので注意\n# Match Group administrators\n#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys\n# 手順\n> echo ssh-ed25519 HOGEHOGE >> >> %PROGRAMDATA%\\ssh\\administrators_authorized_keys\n> icacls.exe "C:\\ProgramData\\ssh\\administrators_authorized_keys" /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F"\n\n')),"\n",r.createElement(n.h2,null,"WinRM で異なるセグメントからの操作を許可する"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'> Get-NetFirewallRule -Name "WinRM*"\n> Get-NetFirewallRule -Name "WinRM*" | Get-NetFirewallAddressFilter\n> Get-NetFirewallRule -Name "WINRM-HTTP-IN-TCP-PUBLIC" | Get-NetFirewallAddressFilter\n\nLocalAddress  : Any\nRemoteAddress : LocalSubnet\n> Set-NetFirewallRule -Name "WINRM-HTTP-In-TCP-PUBLIC" -RemoteAddress LocalSubnet,192.168.10.0/24\n')),"\n",r.createElement(n.h2,null,"Windows Admin Center を入れてみる"),"\n",r.createElement(n.p,null,"scp でファイル送っておく"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"# c:\\ ルートに送る\n> scp WindowsAdminCenter2110.msi tetsuyainfra@hv2019sv.local:\\\n        1 file(s) copied.\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)},s=t(4854),o=t(9299),u=t(4690),c=t(917);const d=e=>{let{data:n,pageContext:t,children:l}=e;const{mdx:{frontmatter:{title:r},tableOfContents:a},previous:i,next:u}=n;return(0,c.tZ)(o.Z,null,(0,c.tZ)("h1",null,r),(0,c.tZ)("div",null),(0,c.tZ)("div",null,l),(0,c.tZ)("div",null,(0,c.tZ)("div",null,i?(0,c.tZ)(s.Link,{to:i.fields.url},i.frontmatter.title):null),(0,c.tZ)("div",null,u?(0,c.tZ)(s.Link,{to:u.fields.url},u.frontmatter.title):null)))};function m(e){return r.createElement(d,e,r.createElement(i,e))}const h=e=>{let{data:n}=e;const t=n.mdx.frontmatter.title;return(0,c.tZ)(u.Z,{title:""+t})}},4690:function(e,n,t){var l=t(7294),r=t(6514),a=t(917);n.Z=e=>{let{title:n,fullTitle:t,children:i}=e;const{title:s,titleFormat:o}=(0,r.Z)();let u=null;return u=t||(n?n+" | "+s:s),(0,a.tZ)(l.Fragment,null,(0,a.tZ)("title",null,u),i)}},1151:function(e,n,t){t.d(n,{Zo:function(){return s},ah:function(){return a}});var l=t(7294);const r=l.createContext({});function a(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:a(e),l.createElement(r.Provider,{value:s},n)}}}]);
//# sourceMappingURL=component---src-pages-blog-blog-post-tsx-content-file-path-home-runner-work-blog-blog-contents-blog-2022-02-20-hyperv-server-2019-md-b714cd5ca2a566abe2f0.js.map