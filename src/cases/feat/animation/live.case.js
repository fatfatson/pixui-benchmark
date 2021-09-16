const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    * {
      box-sizing: border-box;
    }

    .panel {
      position: relative;
      width: 400px;
      height: 360px;
      background-color: rgba(0,0,0,0.5);
      border-radius: 16px;
      transition: background-color 0.25s ease-out;
    }

    .panel-transparent {
      background-color: transparent;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 48px;
      height: 260px;
      align-items: center;
      transition: transform 0.5s ease-out;
    }

    .sidebar-move {
      transform: translateX(48px);
    }

    .icon {
      width: 32px;
      height: 32px;
      background-color: #000;
      margin-top: 16px;
      border-radius: 16px;
      transition: background-color 0.5s ease-out;
    }

    .icon-red {
      background-color: red;
    }

    .audience-panel {
      z-index: 3;
      position: absolute;
      right: 4px;
      top: 4px;
      height: 48px;
      width: 348px;
      border-radius: 16px;
      padding: 0 12px;
      background-color: #2C2C2C;
      transition: background-color 0.5s ease-out, transform 0.5s ease-out, height 0.5s ease-out;
      overflow: hidden;
    }

    .audience-panel-transparent {
      background-color: transparent;
    }

    .audience-panel-move {
      transform: translateX(48px);
    }

    .audience-panel-tall {
      height: 352px;
    }

    .audience-text {
      font-size: 16px;
      color: #fff;
      text-shadow: 1px 1px 1px #000;
      width: 100%;
      overflow: hidden;
      line-clamp: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .comment-outter {
      z-index: 2;
      position: absolute;
      right: 4px;
      top: 56px;
      overflow: hidden;
      height: 302px;
      width: 348px;
    }

    .comment-panel {
      display: flex;
      flex-direction: column;
      height: 292px;
      width: 348px;
      overflow: scroll;
      transition: overflow 0.5s ease-out, transform 0.5s ease-out;
    }

    .comment-panel-hidden {
      overflow: hidden;
    }

    .comment-panel-move {
      transform: translateY(-200px);
    }

    .comment-text {
      flex-shrink: 0;
      margin-top: 4px;
      font-size: 16px;
      color: #fff;
      text-shadow: 1px 1px 1px #000;
      width: 100%;
      overflow: hidden;
      line-clamp: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  html: `
    <div class="panel">
      <div class="sidebar">
        <div class="icon" id="lock"></div>
        <div class="icon" id="menu"></div>
      </div>
      <div class="audience-panel">
        <div class="audience-text">512喝彩 · 99人看过 · 8人在线 · 64热度</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
        <div class="audience-text">· 李清晨 · 大过年的 · 演员的敬仰 · Fukasawa</div>
      </div>
      <div class="comment-outter">
        <div class="comment-panel">
          <div class="comment-text">演员的修养：不去捡空投吗？1</div>
          <div class="comment-text">演员的修养：不去捡空投吗？2</div>
          <div class="comment-text">演员的修养：不去捡空投吗？3</div>
          <div class="comment-text">演员的修养：不去捡空投吗？4</div>
          <div class="comment-text">演员的修养：不去捡空投吗？5</div>
          <div class="comment-text">演员的修养：不去捡空投吗？6</div>
          <div class="comment-text">演员的修养：不去捡空投吗？7</div>
          <div class="comment-text">演员的修养：不去捡空投吗？8</div>
          <div class="comment-text">演员的修养：不去捡空投吗？9</div>
          <div class="comment-text">演员的修养：不去捡空投吗？10</div>
          <div class="comment-text">演员的修养：不去捡空投吗？11</div>
          <div class="comment-text">演员的修养：不去捡空投吗？12</div>
          <div class="comment-text">演员的修养：不去捡空投吗？13</div>
          <div class="comment-text">演员的修养：不去捡空投吗？14</div>
          <div class="comment-text">演员的修养：不去捡空投吗？15</div>
          <div class="comment-text">演员的修养：不去捡空投吗？16</div>
        </div>
      </div>
    </div>
  `,
  run() {
    let hasLocked = false;
    let hasAudienceExpanded = false;
    let isAnimating = false;
    const $panel = document.querySelector('.panel');
    const $audiencePanel = document.querySelector('.audience-panel');
    const $lock = document.querySelector('#lock');
    const $sidebar = document.querySelector('.sidebar');
    const $commentPanel = document.querySelector('.comment-panel');
    $commentPanel.scrollTop = $commentPanel.scrollHeight;

    document.querySelector('#lock').addEventListener('click', () => {
      if (isAnimating) return;

      isAnimating = true;

      if (!hasLocked) {
        // 锁定

        // 背景隐藏 250ms
        // $panel.style.backgroundColor = 'transparent';
        $panel.className = 'panel panel-transparent';
        // $audiencePanel.style.backgroundColor = 'transparent';
        $audiencePanel.className = 'audience-panel audience-panel-transparent';
        // $commentPanel.style.overflow = 'hidden';
        $commentPanel.className = 'comment-panel comment-panel-hidden';
        $commentPanel.scrollTop = $commentPanel.scrollHeight;

        setTimeout(() => {
          // 移动面板
          // $audiencePanel.style.transform = 'translateX(48px)';
          $audiencePanel.className =            'audience-panel audience-panel-transparent audience-panel-move';

          // $sidebar.style.transform = 'translateX(48px)';
          $sidebar.className = 'sidebar sidebar-move';
          // $lock.style.backgroundColor = 'red';
          $lock.className = 'icon icon-red';

          // $commentPanel.style.transform = 'translateY(-200px)';
          $commentPanel.className = 'comment-panel comment-panel-hidden comment-panel-move';
        }, 500);

        setTimeout(() => {
          isAnimating = false;
        }, 1000);
      } else {
        // 移动面板
        // $audiencePanel.style.transform = 'translateX(0px)';
        $audiencePanel.className = 'audience-panel audience-panel-transparent';

        // $sidebar.style.transform = 'translateX(0px)';
        $sidebar.className = 'sidebar';

        // $lock.style.backgroundColor = '#000000';
        $lock.className = 'icon';

        // $commentPanel.style.transform = 'translateY(0px)';
        // $commentPanel.style.overflow = 'scroll';
        $commentPanel.className = 'comment-panel';

        setTimeout(() => {
          // $audiencePanel.style.backgroundColor = '#2c2c2c';
          $audiencePanel.className = 'audience-panel';

          // $panel.style.backgroundColor = 'rgba(0,0,0,0.5)';
          $panel.className = 'panel';
        }, 750);

        setTimeout(() => {
          isAnimating = false;
        }, 1000);
      }

      hasLocked = !hasLocked;
    });

    $audiencePanel.addEventListener('click', () => {
      if (isAnimating || hasLocked) return;

      isAnimating = true;

      if (!hasAudienceExpanded) {
        // 展开
        // $audiencePanel.classList.add('audience-panel-tall');
        $audiencePanel.className = 'audience-panel audience-panel-tall';

        // $audiencePanel.setAttribute('class', 'audience-panel audience-panel-tall');
      } else {
        // $audiencePanel.classList.remove('audience-panel-tall');
        $audiencePanel.className = 'audience-panel';

        // $audiencePanel.setAttribute('class', 'audience-panel');
      }

      hasAudienceExpanded = !hasAudienceExpanded;

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    });
  },
};
