import React, { useState } from 'react';
import { Search, Bell, ShoppingBag, Smartphone, Monitor, Sparkles, X, User, Headphones, Type } from 'lucide-react';
import { AlpsLogo } from './AlpsLogo';
import { ViewMode, ActiveTab, UserProfile } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  cartCount?: number;
  onOpenCart?: () => void;
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isMobileFrame?: boolean;
  user?: UserProfile | null;
  onOpenAccount?: () => void;
  onOpenSupport?: () => void;
  onOpenPolicies?: (tab?: 'returns' | 'privacy' | 'shipping') => void;
  onOpenFontSwitcher?: () => void;
  onOpenSkinQuiz?: () => void;
  onOpenBrandStory?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onViewModeChange,
  cartCount = 0,
  onOpenCart,
  activeTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  isMobileFrame = false,
  user,
  onOpenAccount,
  onOpenSupport,
  onOpenPolicies,
  onOpenFontSwitcher,
  onOpenSkinQuiz,
  onOpenBrandStory,
}) => {
  const { t, language } = useLanguage();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const headerI18n = {
    vi: {
      desktopView: 'Máy tính',
      mobileView: 'Điện thoại',
      desktopTitle: 'Xem giao diện máy tính',
      mobileTitle: 'Xem giao diện điện thoại mô phỏng',
      searchTitle: 'Tìm kiếm sản phẩm',
      closeSearch: 'Đóng tìm kiếm',
      fontTitle: 'Tùy chọn phong cách font chữ',
      supportTitle: 'Chăm sóc khách hàng & Tư vấn da liễu 24/7',
      bellTitle: 'Thông báo',
      notifTitle: 'Thông báo thương hiệu',
      notif1Title: '✦ Ra mắt BST Pure Radiance 2026',
      notif1Desc: 'Tặng kèm thìa bạc cao cấp cho mọi đơn hàng có Alps Regenerating Cream.',
      notif2Title: 'Ưu đãi mã ALPS2026',
      notif2Desc: 'Giảm ngay 10% khi nhập mã tại bước thanh toán.',
      accountLogin: 'Đăng nhập / Đăng ký',
      cartTitle: 'Giỏ hàng của bạn',
    },
    en: {
      desktopView: 'Desktop',
      mobileView: 'Mobile',
      desktopTitle: 'View desktop interface',
      mobileTitle: 'View simulated mobile interface',
      searchTitle: 'Search products',
      closeSearch: 'Close search',
      fontTitle: 'Typography style switcher',
      supportTitle: 'Customer Care & 24/7 Skin Consultation',
      bellTitle: 'Notifications',
      notifTitle: 'Brand Notifications',
      notif1Title: '✦ Launching Pure Radiance 2026',
      notif1Desc: 'Complimentary luxury silver applicator spoon with every Alps Cream order.',
      notif2Title: 'Privilege Code ALPS2026',
      notif2Desc: 'Enjoy 10% off at checkout with coupon ALPS2026.',
      accountLogin: 'Sign In / Register',
      cartTitle: 'Your Shopping Bag',
    },
    de: {
      desktopView: 'Desktop',
      mobileView: 'Mobil',
      desktopTitle: 'Desktop-Ansicht',
      mobileTitle: 'Mobile Simulation',
      searchTitle: 'Produkte suchen',
      closeSearch: 'Suche schließen',
      fontTitle: 'Typografie-Einstellungen',
      supportTitle: 'Kundenservice & 24/7 Hautberatung',
      bellTitle: 'Benachrichtigungen',
      notifTitle: 'Marken-Mitteilungen',
      notif1Title: '✦ Kollektion Pure Radiance 2026',
      notif1Desc: 'Inklusive Schweizer Silber-Spatel bei jeder Gesichtscreme-Bestellung.',
      notif2Title: 'Gutscheincode ALPS2026',
      notif2Desc: '10% Rabatt beim Bezahlvorgang mit ALPS2026.',
      accountLogin: 'Anmelden / Registrieren',
      cartTitle: 'Ihr Warenkorb',
    },
    es: {
      desktopView: 'Escritorio',
      mobileView: 'Móvil',
      desktopTitle: 'Vista escritorio',
      mobileTitle: 'Vista móvil simulada',
      searchTitle: 'Buscar productos',
      closeSearch: 'Cerrar búsqueda',
      fontTitle: 'Estilo tipográfico',
      supportTitle: 'Atención al Cliente y Consulta Facial 24/7',
      bellTitle: 'Notificaciones',
      notifTitle: 'Avisos de la Marca',
      notif1Title: '✦ Colección Pure Radiance 2026',
      notif1Desc: 'Espátula de plata suiza de regalo con cada Alps Face Cream.',
      notif2Title: 'Código ALPS2026',
      notif2Desc: '10% de descuento al pagar con el código ALPS2026.',
      accountLogin: 'Iniciar Sesión / Registro',
      cartTitle: 'Tu Bolsa de Compras',
    },
    zh: {
      desktopView: '电脑端',
      mobileView: '手机端',
      desktopTitle: '桌面全屏视图',
      mobileTitle: '手机模拟视图',
      searchTitle: '搜索产品',
      closeSearch: '关闭搜索',
      fontTitle: '字体排版风格切换',
      supportTitle: '客户服务与 24/7 皮肤科咨询',
      bellTitle: '通知提醒',
      notifTitle: '品牌最新资讯',
      notif1Title: '✦ 2026 纯净焕彩新系列发布',
      notif1Desc: '随单赠送瑞士定制奢华银质面霜勺。',
      notif2Title: '尊享礼券 ALPS2026',
      notif2Desc: '结账输入 ALPS2026 立享 9 折专属特权。',
      accountLogin: '登录 / 注册会员',
      cartTitle: '您的专属购物袋',
    },
  }[language] || {
    desktopView: 'Desktop',
    mobileView: 'Mobile',
    desktopTitle: 'View desktop interface',
    mobileTitle: 'View simulated mobile interface',
    searchTitle: 'Search products',
    closeSearch: 'Close search',
    fontTitle: 'Typography style switcher',
    supportTitle: 'Customer Care & 24/7 Skin Consultation',
    bellTitle: 'Notifications',
    notifTitle: 'Brand Notifications',
    notif1Title: '✦ Launching Pure Radiance 2026',
    notif1Desc: 'Complimentary luxury silver applicator spoon with every Alps Cream order.',
    notif2Title: 'Privilege Code ALPS2026',
    notif2Desc: 'Enjoy 10% off at checkout with coupon ALPS2026.',
    accountLogin: 'Sign In / Register',
    cartTitle: 'Your Shopping Bag',
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcf9f4]/90 backdrop-blur-md border-b border-[#202022]/5">
      {/* Top Announcement Bar - visible in desktop or wide view */}
      {!isMobileFrame && (
        <div className="bg-[#202022] text-[#fcf9f4] text-xs py-1.5 px-4 hidden md:flex items-center justify-between tracking-wider font-light">
          <div className="flex items-center space-x-2 text-[11px] mx-auto">
            <span className="text-[#fed8c9]">✦</span>
            <span>{t.announcement}</span>
            <span className="text-[#fed8c9]">✦</span>
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            {onOpenSupport && (
              <button
                onClick={onOpenSupport}
                className="text-[#fed8c9] hover:underline flex items-center space-x-1"
              >
                <Headphones className="w-3 h-3" />
                <span>{t.csHotline}</span>
              </button>
            )}
            <span className="opacity-75">{t.zurichHQ}</span>
            <LanguageSelector variant="topbar" />
          </div>
        </div>
      )}

      {/* Main Bar */}
      <div className={`px-4 ${isMobileFrame ? 'py-2.5' : 'py-3.5 max-w-7xl mx-auto'} flex items-center justify-between`}>
        {/* Left Side: Search or Mobile Navigation */}
        <div className="flex items-center space-x-3">
          {showSearchInput ? (
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#77767b] absolute left-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="pl-8 pr-7 py-1 text-xs md:text-sm bg-[#f0ede9] rounded-full focus:outline-none focus:ring-1 focus:ring-[#74584d] w-44 md:w-60 transition-all text-[#1c1c19]"
                autoFocus
              />
              <button
                onClick={() => {
                  setShowSearchInput(false);
                  onSearchChange('');
                }}
                className="absolute right-2 text-[#77767b] hover:text-[#1c1c19]"
                title={headerI18n.closeSearch}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              id="header-search-btn"
              onClick={() => setShowSearchInput(true)}
              className="p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded-full transition-colors"
              title={headerI18n.searchTitle}
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
          )}

          {/* Desktop Navigation Links */}
          {!isMobileFrame && (
            <nav className="hidden lg:flex items-center space-x-6 pl-4 text-xs font-medium tracking-wider text-[#46464a]">
              <button
                onClick={() => onSelectTab('home')}
                className={`transition-colors hover:text-[#1c1c19] ${activeTab === 'home' ? 'text-[#1c1c19] font-semibold underline underline-offset-4 decoration-[#74584d]' : ''}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => onSelectTab('catalog')}
                className={`transition-colors hover:text-[#1c1c19] ${activeTab === 'catalog' ? 'text-[#1c1c19] font-semibold underline underline-offset-4 decoration-[#74584d]' : ''}`}
              >
                {t.nav.catalog}
              </button>
              <button
                onClick={() => onSelectTab('routine')}
                className={`transition-colors hover:text-[#1c1c19] ${activeTab === 'routine' ? 'text-[#1c1c19] font-semibold underline underline-offset-4 decoration-[#74584d]' : ''}`}
              >
                {t.nav.routine}
              </button>
              <button
                onClick={() => {
                  if (onOpenBrandStory) {
                    onOpenBrandStory();
                  } else {
                    const el = document.getElementById('brand-story');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="transition-colors hover:text-[#1c1c19] font-medium"
              >
                {t.nav.story}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('minimalist-packaging');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="transition-colors hover:text-[#1c1c19]"
              >
                {t.nav.packaging}
              </button>
              <button
                onClick={() => {
                  if (onOpenAccount) onOpenAccount();
                  else onSelectTab('account');
                }}
                className={`transition-colors hover:text-[#1c1c19] ${activeTab === 'account' ? 'text-[#1c1c19] font-semibold underline underline-offset-4 decoration-[#74584d]' : ''}`}
              >
                {t.nav.orders}
              </button>
              {onOpenSkinQuiz && (
                <button
                  onClick={onOpenSkinQuiz}
                  className="transition-all hover:scale-105 active:scale-95 px-3 py-1 rounded-full bg-[#f4ece3] hover:bg-[#ebdccf] text-[#74584d] font-semibold flex items-center space-x-1.5 border border-[#fed8c9]/80 shadow-2xs cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#74584d]" />
                  <span>{t.nav.quiz}</span>
                </button>
              )}
              {onOpenSupport && (
                <button
                  id="nav-support-btn"
                  onClick={onOpenSupport}
                  className="transition-colors text-[#74584d] hover:text-[#1c1c19] font-semibold flex items-center space-x-1 cursor-pointer"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>{t.nav.support}</span>
                </button>
              )}
            </nav>
          )}
        </div>

        {/* Center: Brand Logo */}
        <div
          onClick={() => onSelectTab('home')}
          className="cursor-pointer text-center select-none group py-1 flex items-center justify-center"
        >
          <AlpsLogo />
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Multi-language Selector (EN, VI, DE, ES, ZH) */}
          <LanguageSelector variant="header" />
          {/* View Mode Toggle (on standard desktop screen) */}
          {!isMobileFrame && (
            <div className="hidden sm:flex items-center bg-[#f0ede9] rounded-full p-0.5 border border-[#ebe8e3] text-xs">
              <button
                onClick={() => onViewModeChange('desktop')}
                className={`px-2.5 py-1 rounded-full flex items-center space-x-1 transition-all ${
                  viewMode === 'desktop'
                    ? 'bg-[#202022] text-[#ffffff] shadow-xs'
                    : 'text-[#46464a] hover:text-[#1c1c19]'
                }`}
                title={headerI18n.desktopTitle}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium hidden md:inline">{headerI18n.desktopView}</span>
              </button>
              <button
                onClick={() => onViewModeChange('mobile')}
                className={`px-2.5 py-1 rounded-full flex items-center space-x-1 transition-all ${
                  viewMode === 'mobile'
                    ? 'bg-[#202022] text-[#ffffff] shadow-xs'
                    : 'text-[#46464a] hover:text-[#1c1c19]'
                }`}
                title={headerI18n.mobileTitle}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium hidden md:inline">{headerI18n.mobileView}</span>
              </button>
            </div>
          )}

          {/* Brand Typography Preset Switcher */}
          {onOpenFontSwitcher && (
            <button
              id="header-font-btn"
              onClick={onOpenFontSwitcher}
              className="p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded-full transition-colors flex items-center space-x-1"
              title={headerI18n.fontTitle}
            >
              <Type className="w-4 h-4 text-[#74584d]" />
              <span className="text-[11px] font-medium hidden lg:inline text-[#74584d]">Font</span>
            </button>
          )}

          {/* Customer Support Button */}
          {onOpenSupport && (
            <button
              id="header-support-btn"
              onClick={onOpenSupport}
              className="p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded-full transition-colors relative"
              title={headerI18n.supportTitle}
            >
              <Headphones className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#8a9a86] rounded-full ring-2 ring-[#fcf9f4]" />
            </button>
          )}

          {/* Notifications button with indicator dot */}
          <div className="relative">
            <button
              id="header-bell-btn"
              onClick={() => setShowNotification(!showNotification)}
              className="p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded-full transition-colors relative"
              title={headerI18n.bellTitle}
            >
              <Bell className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ba1a1a] rounded-full ring-2 ring-[#fcf9f4]" />
            </button>

            {showNotification && (
              <div className="absolute right-0 mt-2 w-72 bg-[#ffffff] border border-[#ebe8e3] rounded-2xl shadow-xl p-3.5 z-50 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#f0ede9]">
                  <span className="font-medium text-[#1c1c19]">{headerI18n.notifTitle}</span>
                  <button
                    onClick={() => setShowNotification(false)}
                    className="text-[#77767b] hover:text-[#1c1c19]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="py-2.5 space-y-2">
                  <div className="p-2 bg-[#fcf9f4] rounded-xl border border-[#ebe8e3]/60">
                    <p className="font-medium text-[#74584d]">{headerI18n.notif1Title}</p>
                    <p className="text-[#46464a] text-[11px] mt-0.5">
                      {headerI18n.notif1Desc}
                    </p>
                  </div>
                  <div className="p-2 bg-[#fcf9f4] rounded-xl border border-[#ebe8e3]/60">
                    <p className="font-medium text-[#1c1c19]">{headerI18n.notif2Title}</p>
                    <p className="text-[#46464a] text-[11px] mt-0.5">
                      {headerI18n.notif2Desc}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Account / Order History Button */}
          {onOpenAccount && (
            <button
              id="header-account-btn"
              onClick={onOpenAccount}
              className="p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded-full transition-colors flex items-center space-x-1"
              title={user ? `${user.name} - ${t.nav.orders}` : headerI18n.accountLogin}
            >
              {user ? (
                <div className="w-6 h-6 rounded-full bg-[#74584d] text-white text-[10px] font-medium flex items-center justify-center shadow-xs">
                  {user.avatarInitials}
                </div>
              ) : (
                <User className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          )}

          {/* Shopping Bag Button (No badge when empty) */}
          {onOpenCart && (
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="p-1.5 text-[#1c1c19] hover:bg-[#f0ede9] rounded-full transition-colors relative"
              title={headerI18n.cartTitle}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#1c1c19] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
