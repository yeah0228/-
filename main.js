document.addEventListener('DOMContentLoaded', () => {
  const dateOpts = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };

  document.getElementById('currentDate').innerHTML =
    `<i class="far fa-calendar-alt mr-1"></i> ${new Date().toLocaleDateString('zh-TW', dateOpts)}`;

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    document.getElementById('progressBar').style.width = scrolled + '%';
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    showToast('已切換主題模式');
  });

  let fontScale = 100;
  const article = document.getElementById('interview-section');

  document.getElementById('fontIncrease').addEventListener('click', () => {
    if (fontScale < 130) {
      fontScale += 10;
      article.style.fontSize = fontScale + '%';
    }
  });

  document.getElementById('fontDecrease').addEventListener('click', () => {
    if (fontScale > 80) {
      fontScale -= 10;
      article.style.fontSize = fontScale + '%';
    }
  });

  document.getElementById('fontReset').addEventListener('click', () => {
    fontScale = 100;
    article.style.fontSize = '100%';
  });

  let isSingleCol = false;
  const mainGrid = document.getElementById('mainGrid');

  document.getElementById('layoutToggle').addEventListener('click', () => {
    isSingleCol = !isSingleCol;

    if (isSingleCol) {
      mainGrid.classList.remove('lg:grid-cols-12');
      document.getElementById('interview-section').classList.remove('lg:col-span-8');
      document.getElementById('layoutModeText').innerText = '單欄閱讀';
      showToast('已切換為單欄沉浸閱讀');
    } else {
      mainGrid.classList.add('lg:grid-cols-12');
      document.getElementById('interview-section').classList.add('lg:col-span-8');
      document.getElementById('layoutModeText').innerText = '雙欄雜誌';
      showToast('已切換為標準雙欄模式');
    }
  });

  document.getElementById('summaryDrawerBtn').addEventListener('click', openSummaryDrawer);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      closeSummaryDrawer();
    }
  });
});

function openSummaryDrawer() {
  document.getElementById('summaryDrawer').classList.remove('translate-x-full');
}

function closeSummaryDrawer() {
  document.getElementById('summaryDrawer').classList.add('translate-x-full');
}

function openModal(src, caption) {
  document.getElementById('modalImg').src = src;
  document.getElementById('modalCaption').innerText = caption;
  document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('imageModal').classList.add('hidden');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').innerText = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2500);
}

async function copyQuote(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('金句已複製至剪貼簿！');
  } catch (error) {
    const dummy = document.createElement('textarea');
    dummy.value = text;
    dummy.setAttribute('readonly', '');
    dummy.style.position = 'fixed';
    dummy.style.opacity = '0';
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    dummy.remove();
    showToast('金句已複製至剪貼簿！');
  }
}
