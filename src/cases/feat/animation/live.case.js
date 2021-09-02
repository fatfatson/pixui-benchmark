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
    
    .sidebar {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 48px;
      height: 260px;
      align-items: center;
      transition: all 0.5s ease-out;
    }

    .icon {
      width: 32px;
      height: 32px;
      background-color: #000;
      margin-top: 16px;
      border-radius: 16px;
      transition: all 0.5s ease-out;
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
      transition: all 0.5s ease-out;
      overflow: hidden;
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
      transition: all 0.5s ease-out;
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
        $panel.style.backgroundColor = 'transparent';
        $audiencePanel.style.backgroundColor = 'transparent';
        $commentPanel.style.overflow = 'hidden';
        $commentPanel.scrollTop = $commentPanel.scrollHeight;
        $audiencePanel.style.height = '48px';

        setTimeout(() => {
          // 移动面板
          $audiencePanel.style.transform = 'translateX(48px)';
          $sidebar.style.transform = 'translateX(48px)';
          $lock.style.backgroundColor = 'red';
          $commentPanel.style.transform = 'translateY(-200px)';
        }, 500);

        setTimeout(() => {
          isAnimating = false;
        }, 1000);
      } else {
        // 移动面板
        $audiencePanel.style.transform = 'translateX(0px)';
        $sidebar.style.transform = 'translateX(0px)';
        $lock.style.backgroundColor = '#000000';
        $commentPanel.style.transform = 'translateY(0px)';
        $commentPanel.style.overflow = 'scroll';

        setTimeout(() => {
          $panel.style.backgroundColor = 'rgba(0,0,0,0.5)';
          $audiencePanel.style.backgroundColor = '#2c2c2c';
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
        $audiencePanel.style.height = '352px';
      } else {
        $audiencePanel.style.height = '48px';
      }

      hasAudienceExpanded = !hasAudienceExpanded;

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    });
  },
};
