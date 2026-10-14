/* @ds-bundle: {"format":4,"namespace":"EasyMDDesignSystem_91cc9c","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"6d53664b5c15","components/core/Avatar.jsx":"d6d9db7b3075","components/core/Badge.jsx":"bf0064f89eef","components/core/Button.jsx":"a5351ba10b95","components/core/Card.jsx":"8a9bc1e5825f","components/core/Checkbox.jsx":"a508672eaf1a","components/core/IconButton.jsx":"d41e373ba076","components/core/Input.jsx":"a43955871ab2","components/core/ProgressBar.jsx":"f5ab88eb203f","components/core/Select.jsx":"59072ab550ef","components/core/Switch.jsx":"8ae78bf7cdb6","components/core/Tabs.jsx":"0e672ef6c5ef","components/core/Tag.jsx":"eed28de1703a","components/core/Textarea.jsx":"8a79d07eee74","components/core/Tooltip.jsx":"9dfcc0a62b21","ui_kits/marketing/CtaFooter.jsx":"3e10768d8daf","ui_kits/marketing/Features.jsx":"246db8c2da07","ui_kits/marketing/Hero.jsx":"4b183083a90e","ui_kits/marketing/HowItWorks.jsx":"dc863fd6b831","ui_kits/marketing/Nav.jsx":"757539651291","ui_kits/marketing/Pricing.jsx":"b16b77f457b0","ui_kits/patient_app_v2/AppShell.jsx":"efdc0906132a","ui_kits/patient_app_v2/Bienestar.jsx":"d4fd29e7f65f","ui_kits/patient_app_v2/Concierge.jsx":"420597047bd3","ui_kits/patient_app_v2/Home.jsx":"c05fe237cfe6","ui_kits/patient_app_v2/Labs.jsx":"5c2e088685f5","ui_kits/patient_app_v2/Psicologia.jsx":"769406769c19","ui_kits/provider_web/Chrome.jsx":"6c412944973b","ui_kits/provider_web/ConsultaRoom.jsx":"b6238f605898","ui_kits/provider_web/Dashboard.jsx":"5c357149f9a7","ui_kits/provider_web/ProviderApp.jsx":"82e090078a1d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EasyMDDesignSystem_91cc9c = window.EasyMDDesignSystem_91cc9c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
/** Inline alert / message banner. tone sets color; empathetic copy. */
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  style = {}
}) {
  const map = {
    info: {
      bg: 'var(--info-bg)',
      bd: 'var(--blue-200)',
      fg: 'var(--blue-700)'
    },
    success: {
      bg: 'var(--success-bg)',
      bd: 'var(--mint-200)',
      fg: 'var(--mint-700)'
    },
    warning: {
      bg: 'var(--warning-bg)',
      bd: '#fde68a',
      fg: '#92590b'
    },
    danger: {
      bg: 'var(--danger-bg)',
      bd: '#f5c6bd',
      fg: '#a8341f'
    }
  };
  const t = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      borderRadius: 'var(--radius-lg)',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: t.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--foreground)',
      marginTop: title ? 2 : 0
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round avatar with image or initials fallback, optional status dot. */
function Avatar({
  src,
  name = '',
  size = 40,
  status,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const statusColor = {
    online: 'var(--success)',
    busy: 'var(--danger)',
    away: 'var(--warning)'
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: size * 0.4,
      border: '1px solid var(--border)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), statusColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: size * 0.28,
      height: size * 0.28,
      minWidth: 8,
      minHeight: 8,
      borderRadius: 'var(--radius-full)',
      background: statusColor,
      border: '2px solid var(--surface)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status pill. tone maps to semantic colors; soft fill by default. */
function Badge({
  tone = 'neutral',
  solid = false,
  children,
  style = {},
  ...rest
}) {
  const map = {
    neutral: {
      soft: {
        bg: 'var(--gray-100)',
        fg: 'var(--gray-600)'
      },
      solid: {
        bg: 'var(--gray-600)',
        fg: '#fff'
      }
    },
    primary: {
      soft: {
        bg: 'var(--color-primary-soft)',
        fg: 'var(--color-primary)'
      },
      solid: {
        bg: 'var(--color-primary)',
        fg: '#fff'
      }
    },
    accent: {
      soft: {
        bg: 'var(--color-accent-soft)',
        fg: 'var(--blue-700)'
      },
      solid: {
        bg: 'var(--color-accent)',
        fg: '#fff'
      }
    },
    success: {
      soft: {
        bg: 'var(--success-bg)',
        fg: 'var(--mint-700)'
      },
      solid: {
        bg: 'var(--success)',
        fg: '#fff'
      }
    },
    warning: {
      soft: {
        bg: 'var(--warning-bg)',
        fg: '#92590b'
      },
      solid: {
        bg: 'var(--warning)',
        fg: '#fff'
      }
    },
    danger: {
      soft: {
        bg: 'var(--danger-bg)',
        fg: '#a8341f'
      },
      solid: {
        bg: 'var(--danger)',
        fg: '#fff'
      }
    }
  };
  const t = (map[tone] || map.neutral)[solid ? 'solid' : 'soft'];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.4,
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EasyMD Button — primary navy solid, secondary navy outline, ghost, accent,
 * mint. Sentence-case, amable imperative labels. Subtle hover (tone/lift).
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: '0 14px',
      fontSize: 'var(--text-sm)',
      gap: 6,
      radius: 'var(--radius-md)'
    },
    md: {
      height: 44,
      padding: '0 20px',
      fontSize: 'var(--text-base)',
      gap: 8,
      radius: 'var(--radius-lg)'
    },
    lg: {
      height: 52,
      padding: '0 28px',
      fontSize: 'var(--text-lg)',
      gap: 10,
      radius: 'var(--radius-lg)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-primary-foreground)',
      border: '1px solid var(--color-primary)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--color-accent-foreground)',
      border: '1px solid var(--color-accent)'
    },
    mint: {
      background: 'var(--color-secondary)',
      color: 'var(--color-secondary-foreground)',
      border: '1px solid var(--color-secondary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--color-primary-hover)',
    borderColor: 'var(--color-primary-hover)'
  } : variant === 'accent' ? {
    background: 'var(--color-accent-hover)',
    borderColor: 'var(--color-accent-hover)'
  } : variant === 'mint' ? {
    background: 'var(--color-secondary-hover)',
    borderColor: 'var(--color-secondary-hover)'
  } : variant === 'secondary' ? {
    background: 'var(--color-primary-soft)',
    borderColor: 'var(--color-primary)'
  } : {
    background: 'var(--color-primary-soft)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transform: press && !disabled ? 'var(--press-scale)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bento card surface. white fill, hairline border, soft shadow, 2xl radius.
 *  Set hoverable for lift-on-hover; pad controls inner padding. */
function Card({
  hoverable = false,
  pad = 24,
  as = 'div',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-sm)',
      padding: pad,
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
      ...(hover ? {
        transform: 'var(--hover-lift)',
        boxShadow: 'var(--shadow-md)'
      } : {}),
      ...style
    }
  }, rest), children);
}

/** Optional structured header for a Card. */
function CardHeader({
  title,
  subtitle,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h4)',
      color: 'var(--foreground)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)',
      marginTop: 2
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Checkbox with label. Controlled via checked/onChange. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const cid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-base)',
      color: 'var(--foreground)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 6,
      flexShrink: 0,
      background: checked ? 'var(--color-primary)' : 'var(--surface)',
      border: `1px solid ${checked ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      transition: 'background var(--duration-fast), border-color var(--duration-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5l2.5 2.5 4.5-5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    id: cid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Pair with a Lucide icon child. */
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--color-primary-foreground)',
      border: '1px solid var(--color-primary)'
    },
    outline: {
      background: 'var(--surface)',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...v,
      ...(hover && !disabled ? {
        background: variant === 'solid' ? 'var(--color-primary-hover)' : 'var(--color-primary-soft)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, optional icon, helper/error text. 44px tall. */
function Input({
  label,
  hint,
  error,
  leftIcon,
  id,
  type = 'text',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--foreground)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'inline-flex',
      color: 'var(--muted-foreground)',
      pointerEvents: 'none'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 44,
      padding: leftIcon ? '0 14px 0 40px' : '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--foreground)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--muted-foreground)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
/** Horizontal progress bar. value 0-100. tone sets fill color. */
function ProgressBar({
  value = 0,
  tone = 'accent',
  label,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = {
    accent: 'var(--color-accent)',
    primary: 'var(--color-primary)',
    success: 'var(--color-secondary)'
  }[tone] || 'var(--color-accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--foreground)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-full)',
      background: 'var(--gray-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-full)',
      background: fill,
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input. options: [{value,label}] or strings. */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sid = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-accent)' : 'var(--border-strong)';
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--foreground)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 44,
      padding: '0 40px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--foreground)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none'
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      color: 'var(--muted-foreground)'
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--muted-foreground)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Toggle switch. Controlled via checked/onChange. Mint when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {}
}) {
  const sid = id || React.useId();
  const control = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--color-secondary)' : 'var(--gray-300)',
      transition: 'background var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-full)',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  }));
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-base)',
      color: 'var(--foreground)',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("input", {
    id: sid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/** Underline tabs. items: [{id,label}]. Controlled via value/onChange. */
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        padding: '10px 14px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-heading)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--weight-semibold)',
        color: on ? 'var(--color-primary)' : 'var(--muted-foreground)',
        transition: 'color var(--duration-fast)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 3,
        borderRadius: 'var(--radius-full)',
        background: on ? 'var(--color-accent)' : 'transparent',
        transition: 'background var(--duration-fast)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Removable tag/chip. Optional onRemove renders a × control. */
function Tag({
  children,
  onRemove,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 6px 5px 12px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      fontSize: 'var(--text-sm)',
      color: 'var(--foreground)',
      fontWeight: 'var(--weight-medium)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: onRemove,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: 'var(--gray-100)',
      color: 'var(--gray-600)',
      cursor: 'pointer',
      fontSize: 12,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input. label + helper/error, comfortable padding. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const tid = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-accent)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: tid,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--foreground)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: tid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--foreground)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--muted-foreground)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
/** Hover tooltip. Wraps a child trigger; shows label above on hover/focus. */
function Tooltip({
  label,
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      zIndex: 50,
      background: 'var(--navy-700)',
      color: '#fff',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      boxShadow: 'var(--shadow-md)',
      animation: 'emd-fade-in-up var(--duration-fast) var(--ease-out)'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '5px solid var(--navy-700)'
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CtaFooter.jsx
try { (() => {
// EasyMD marketing — CTA band + footer
const DS = window.EasyMDDesignSystem_91cc9c;
function CtaFooter() {
  const {
    Button
  } = DS;
  const cols = [{
    h: 'Producto',
    items: ['Consultas', 'Psicología', 'Farmacia', 'Laboratorio', 'Dental']
  }, {
    h: 'Empresa',
    items: ['Nosotros', 'Empleos', 'Prensa', 'Blog']
  }, {
    h: 'Soporte',
    items: ['Centro de ayuda', 'Contacto', 'Estado del servicio']
  }, {
    h: 'Legal',
    items: ['Privacidad', 'Términos', 'Aviso de salud']
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--navy-500)',
      padding: '56px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-h2)',
      marginBottom: 10
    }
  }, "\xBFListo para cuidarte mejor?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 'var(--text-lg)',
      maxWidth: 440
    }
  }, "\xDAnete hoy y habla con un m\xE9dico en minutos.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "mint",
    size: "lg"
  }, "Crea tu cuenta"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.3)'
    }
  }, "Habla con EasyMD")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/easymd-logo.png",
    alt: "EasyMD",
    style: {
      height: 32,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)',
      maxWidth: 240
    }
  }, "Acceso simple y moderno a la salud, para todas las familias de Latinoam\xE9rica.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      padding: '20px 24px',
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--subtle-foreground)'
    }
  }, "\xA9 2026 EasyMD \xB7 Hecho con cuidado para Latinoam\xE9rica")));
}
window.CtaFooter = CtaFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
// EasyMD marketing — services bento + how-it-works
const DS = window.EasyMDDesignSystem_91cc9c;
function Features() {
  const services = [{
    icon: 'stethoscope',
    title: 'Consultas médicas',
    desc: 'Atención general ilimitada, 24/7, desde donde estés.',
    big: true
  }, {
    icon: 'brain',
    title: 'Psicología',
    desc: 'Acompañamiento emocional con profesionales.'
  }, {
    icon: 'pill',
    title: 'Farmacia digital',
    desc: 'Recetas que llegan a tu farmacia más cercana.'
  }, {
    icon: 'flask-conical',
    title: 'Laboratorio',
    desc: 'Estudios a domicilio y resultados en la app.'
  }, {
    icon: 'smile',
    title: 'Dental',
    desc: 'Revisiones y planes de cuidado dental.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emd-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Todo en un solo lugar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, "Una plataforma, toda tu salud")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    className: "emd-card emd-card-hover",
    style: {
      gridColumn: s.big ? 'span 1' : 'span 1',
      gridRow: s.big ? 'span 2' : 'span 1',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      background: s.big ? 'var(--navy-500)' : 'var(--surface)',
      borderColor: s.big ? 'var(--navy-500)' : 'var(--border)',
      justifyContent: s.big ? 'space-between' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-lg)',
      background: s.big ? 'rgba(255,255,255,0.12)' : 'var(--color-accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      color: s.big ? 'var(--mint-300)' : 'var(--color-accent)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: s.big ? '#fff' : 'var(--foreground)',
      marginBottom: 6
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: s.big ? 'rgba(255,255,255,0.8)' : 'var(--muted-foreground)'
    }
  }, s.desc))))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// EasyMD marketing — hero with bento mock visual
const DS = window.EasyMDDesignSystem_91cc9c;
function Hero() {
  const {
    Button,
    Badge,
    Avatar
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(14,165,233,0.10), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -140,
      left: -100,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(16,185,129,0.10), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 24px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "emd-eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Salud digital para todos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      lineHeight: 1.05,
      marginBottom: 20
    }
  }, "Un m\xE9dico siempre cerca de ti"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--muted-foreground)',
      maxWidth: 480,
      marginBottom: 28
    }
  }, "Consultas m\xE9dicas y psicol\xF3gicas ilimitadas, a demanda. M\xE1s farmacia, laboratorio y dental \u2014 todo desde una sola app, a un precio justo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Crea tu cuenta"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Solicita una demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['Ana', 'Luis', 'Sofía', 'Marco'].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      marginLeft: i ? -10 : 0,
      border: '2px solid var(--background)',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: 36
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--foreground)'
    }
  }, "+50 000 familias"), " ya conf\xEDan en EasyMD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridAutoRows: 'minmax(90px, auto)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emd-card",
    style: {
      gridColumn: 'span 2',
      padding: 20,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dra. Ana Ruiz",
    size: 52,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, "Dra. Ana Ruiz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, "Medicina general \xB7 en l\xEDnea ahora")), /*#__PURE__*/React.createElement(Button, {
    variant: "mint",
    size: "sm"
  }, "Entrar")), /*#__PURE__*/React.createElement("div", {
    className: "emd-card",
    style: {
      padding: 18,
      background: 'var(--navy-500)',
      borderColor: 'var(--navy-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--mint-300)'
    }
  }, "Espera"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      marginTop: 6
    }
  }, "< 10 min")), /*#__PURE__*/React.createElement("div", {
    className: "emd-card",
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14
    }
  }, "Receta"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Lista")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, "Enviada a tu farmacia EasyMD m\xE1s cercana.")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HowItWorks.jsx
try { (() => {
// EasyMD marketing — how it works (3 steps)
const DS = window.EasyMDDesignSystem_91cc9c;
function HowItWorks() {
  const steps = [{
    icon: 'user-plus',
    n: '01',
    title: 'Crea tu cuenta',
    desc: 'Regístrate en minutos. Sin papeleo, sin filas.'
  }, {
    icon: 'calendar-check',
    n: '02',
    title: 'Agenda o entra ya',
    desc: 'Habla con un médico al instante o agenda tu cita.'
  }, {
    icon: 'heart-pulse',
    n: '03',
    title: 'Cuídate de verdad',
    desc: 'Recetas, estudios y seguimiento en un solo lugar.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emd-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, "Empezar es muy f\xE1cil")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      textAlign: 'center',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-2xl)',
      margin: '0 auto 18px',
      background: 'var(--color-secondary-soft)',
      color: 'var(--color-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--color-accent)',
      letterSpacing: '.08em',
      marginBottom: 8
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 'var(--text-h3)',
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--muted-foreground)',
      maxWidth: 280,
      margin: '0 auto'
    }
  }, s.desc))))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
// EasyMD marketing — top navigation (sticky glass bar)
const DS = window.EasyMDDesignSystem_91cc9c;
function Nav() {
  const {
    Button
  } = DS;
  const links = ['Servicios', 'Cómo funciona', 'Planes', 'Nosotros'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(250,250,247,0.8)',
      backdropFilter: 'blur(12px) saturate(140%)',
      WebkitBackdropFilter: 'blur(12px) saturate(140%)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/easymd-logo.png",
    alt: "EasyMD",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--foreground)',
      fontWeight: 500,
      fontSize: 15
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Inicia sesi\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Crea tu cuenta"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
// EasyMD marketing — pricing plans
const DS = window.EasyMDDesignSystem_91cc9c;
function Pricing() {
  const {
    Button,
    Badge
  } = DS;
  const plans = [{
    name: 'Personal',
    price: '$199',
    period: '/mes',
    desc: 'Para ti, cuando lo necesites.',
    features: ['Consultas médicas ilimitadas', 'Psicología 2 sesiones/mes', 'Recetas digitales', 'Descuentos en farmacia'],
    featured: false
  }, {
    name: 'Familiar',
    price: '$349',
    period: '/mes',
    desc: 'Cuida hasta a 5 integrantes.',
    features: ['Todo lo de Personal', 'Hasta 5 miembros', 'Psicología ilimitada', 'Laboratorio a domicilio', 'Plan dental incluido'],
    featured: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 940,
      margin: '0 auto',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emd-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Planes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h2)'
    }
  }, "Un precio justo para cada quien")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, plans.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "emd-card",
    style: {
      padding: 32,
      background: p.featured ? 'var(--navy-500)' : 'var(--surface)',
      borderColor: p.featured ? 'var(--navy-500)' : 'var(--border)',
      boxShadow: p.featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-h3)',
      color: p.featured ? '#fff' : 'var(--foreground)'
    }
  }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    solid: true
  }, "M\xE1s popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 20,
      color: p.featured ? 'rgba(255,255,255,0.75)' : 'var(--muted-foreground)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 44,
      color: p.featured ? '#fff' : 'var(--foreground)'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: p.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted-foreground)'
    }
  }, p.period)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 28
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: p.featured ? 'rgba(255,255,255,0.92)' : 'var(--foreground)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 18,
      height: 18,
      color: p.featured ? 'var(--mint-300)' : 'var(--color-secondary)'
    }
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'mint' : 'primary',
    fullWidth: true
  }, "Empieza ahora")))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_app_v2/AppShell.jsx
try { (() => {
// EasyMD patient app (live) — shell: StatusBar, DarkHeader, BottomNav, cart, routing
const DS = window.EasyMDDesignSystem_91cc9c;
function StatusBar({
  dark
}) {
  const color = dark ? 'var(--foreground)' : '#fff';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-full",
    style: {
      width: 20,
      height: 20
    }
  })));
}
window.StatusBar = StatusBar;
function DarkHeader({
  onBack,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 22px',
      borderRadius: '0 0 24px 24px',
      background: 'radial-gradient(120% 90% at 14% 6%, rgba(56,189,248,0.20), transparent 46%), linear-gradient(165deg, #14293d 0%, #0c1824 100%)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 6
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children)));
}
window.DarkHeader = DarkHeader;
function BottomNav({
  route,
  go
}) {
  const items = [{
    id: 'home',
    icon: 'house'
  }, {
    id: 'concierge',
    icon: 'sparkles'
  }, {
    id: 'labs',
    icon: 'flask-conical'
  }, {
    id: 'psicologia',
    icon: 'building-2'
  }, {
    id: 'bienestar',
    icon: 'activity'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      borderTop: '1px solid var(--border)',
      background: '#fff',
      padding: '10px 0 20px'
    }
  }, items.map(it => {
    const on = route === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => go(it.id),
      style: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: on ? 'var(--cta-blue)' : 'var(--subtle-foreground)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.icon,
      style: {
        width: 26,
        height: 26
      }
    }));
  }));
}
function Farmacia({
  go
}) {
  const items = [{
    name: 'Losartán 50mg',
    detail: '30 tabletas · 1 al día',
    price: '$85'
  }, {
    name: 'Hierro 60mg',
    detail: '30 cápsulas · 1 al día',
    price: '$45'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--app-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(DarkHeader, {
    onBack: () => go('home')
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, "Tu pedido"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Pre-llenado por la Dra. Garc\xEDa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 14,
      padding: '5px 12px',
      borderRadius: 999,
      background: 'var(--mint-50)',
      color: 'var(--mint-700)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "truck",
    style: {
      width: 15,
      height: 15
    }
  }), " Entrega hoy \xB7 ~50 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)',
      marginBottom: 18
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 18,
      borderTop: i ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#cdeedd',
      color: '#10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pill",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--foreground)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, it.detail)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--foreground)'
    }
  }, it.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--foreground)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--foreground)'
    }
  }, "$130")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      height: 56,
      border: 'none',
      borderRadius: 16,
      cursor: 'pointer',
      background: 'var(--cta-blue)',
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      boxShadow: '0 12px 26px rgba(14,165,233,0.4)'
    }
  }, "Confirmar pedido \xB7 $130"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 14,
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, "Direcci\xF3n y pago guardados \xB7 1 toque")));
}
function PatientApp() {
  const [route, setRoute] = React.useState('home');
  const go = r => setRoute(r);
  React.useEffect(() => {
    window.__setRoute = setRoute;
  }, []);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const screens = {
    home: /*#__PURE__*/React.createElement(Home, {
      go: go
    }),
    concierge: /*#__PURE__*/React.createElement(Concierge, {
      go: go
    }),
    labs: /*#__PURE__*/React.createElement(Labs, {
      go: go
    }),
    psicologia: /*#__PURE__*/React.createElement(Psicologia, {
      go: go
    }),
    bienestar: /*#__PURE__*/React.createElement(Bienestar, {
      go: go
    }),
    farmacia: /*#__PURE__*/React.createElement(Farmacia, {
      go: go
    })
  };
  const navRoute = ['home', 'concierge', 'labs', 'psicologia', 'bienestar'].includes(route) ? route : 'home';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--gray-100)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "phone-frame",
    style: {
      width: 390,
      height: 844,
      borderRadius: 46,
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--app-bg)',
      boxShadow: 'var(--shadow-xl)',
      border: '10px solid #0c1824',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, screens[route]), /*#__PURE__*/React.createElement(BottomNav, {
    route: navRoute,
    go: go
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PatientApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_app_v2/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_app_v2/Bienestar.jsx
try { (() => {
// EasyMD patient app (live) — Bienestar mental (mood check-in)
const DS = window.EasyMDDesignSystem_91cc9c;
function Bienestar({
  go
}) {
  const [mood, setMood] = React.useState('ansioso');
  const moods = [{
    id: 'muybien',
    icon: 'smile',
    label: 'Muy bien',
    bg: '#def5e6',
    fg: '#16a34a'
  }, {
    id: 'regular',
    icon: 'meh',
    label: 'Regular',
    bg: '#fdf2d2',
    fg: '#d97706'
  }, {
    id: 'ansioso',
    icon: 'annoyed',
    label: 'Ansioso/a',
    bg: '#fce9d6',
    fg: '#ea7317'
  }, {
    id: 'mal',
    icon: 'frown',
    label: 'Mal',
    bg: '#fbe2e2',
    fg: '#ef4444'
  }];
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--app-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(DarkHeader, {
    onBack: () => go('home')
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, "Bienestar mental"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Con la Dra. Sof\xEDa M\xE9ndez"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--foreground)',
      marginBottom: 16
    }
  }, "\xBFC\xF3mo te sientes hoy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginBottom: 20
    }
  }, moods.map(m => {
    const on = mood === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => setMood(m.id),
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        padding: 20,
        borderRadius: 20,
        minHeight: 132,
        background: m.bg,
        border: on ? '2px solid var(--cta-blue)' : '2px solid transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: `2.5px solid ${m.fg}`,
        color: m.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": m.icon,
      style: {
        width: 24,
        height: 24
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 19,
        color: 'var(--foreground)'
      }
    }, m.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: 20,
      border: '1.5px solid rgba(16,35,54,0.12)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    style: {
      width: 18,
      height: 18,
      color: 'var(--cta-blue)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--cta-blue)'
    }
  }, "AI Concierge")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 16,
      lineHeight: 1.45,
      color: 'var(--foreground)'
    }
  }, "Lo siento, Ana. \xBFQuieres hablar con la Dra. Sof\xEDa ahora? Tiene un espacio en 15 min."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('psicologia'),
    style: {
      flex: 1,
      height: 50,
      border: 'none',
      borderRadius: 14,
      cursor: 'pointer',
      background: 'var(--cta-blue)',
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16,
      boxShadow: '0 10px 22px rgba(14,165,233,0.35)'
    }
  }, "S\xED, agendar"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--muted-foreground)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Ahora no"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: 20,
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--foreground)'
    }
  }, "7 de 7 d\xEDas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, "Esta semana")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 12px',
      borderRadius: 999,
      background: 'var(--mint-50)',
      color: 'var(--mint-700)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "flame",
    style: {
      width: 16,
      height: 16
    }
  }), " Racha activa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: 70
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: i === 6 ? 48 : 0,
      borderRadius: 8,
      background: i === 6 ? 'var(--cta-blue)' : 'transparent'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--subtle-foreground)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: 20,
      border: '1.5px solid rgba(16,35,54,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#eaf6fd',
      color: 'var(--cta-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "notebook-pen",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--cta-blue)',
      marginBottom: 4
    }
  }, "Tarea de hoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--foreground)',
      lineHeight: 1.3
    }
  }, "Escribe 3 cosas por las que est\xE9s agradecida"))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      height: 52,
      border: 'none',
      borderRadius: 14,
      cursor: 'pointer',
      background: 'var(--cta-blue)',
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      boxShadow: '0 10px 22px rgba(14,165,233,0.32)'
    }
  }, "Empezar ahora"))));
}
window.Bienestar = Bienestar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_app_v2/Bienestar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_app_v2/Concierge.jsx
try { (() => {
// EasyMD patient app (live) — AI Concierge chat
const DS = window.EasyMDDesignSystem_91cc9c;
function Concierge({
  go
}) {
  const pend = [{
    icon: 'pill',
    title: 'Confirmar receta',
    sub: 'Losartán + Hierro · $130',
    action: 'farmacia'
  }, {
    icon: 'calendar-plus',
    title: 'Agendar lab seguimiento',
    sub: 'En 13 días',
    action: 'labs'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--app-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(DarkHeader, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/easymd-icon.png",
    alt: "",
    style: {
      width: 48,
      height: 48
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#10b981',
      border: '2px solid #0e1c2b'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 21,
      color: '#fff'
    }
  }, "easyMD \xB7 AI Concierge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#34d399'
    }
  }, "Activo \xB7 siempre contigo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--muted-foreground)',
      marginBottom: 12
    }
  }, "Pendientes \xB7 2"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 22
    }
  }, pend.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: '#fff',
      borderRadius: 18,
      padding: '16px 18px',
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--cta-blue)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--foreground)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, p.sub)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(p.action),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--cta-blue)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Hacer")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BotMsg, null, "Hola Ana \uD83D\uDC4B Vi que la Dra. Garc\xEDa te recet\xF3 Losart\xE1n y Hierro. Tu pedido est\xE1 pre-llenado y la entrega es en ~50 min. \xBFEn qu\xE9 te ayudo?"), /*#__PURE__*/React.createElement(UserMsg, null, "\xBFCu\xE1ndo debo tomar el hierro?"), /*#__PURE__*/React.createElement(BotMsg, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\xA1Hola Ana! \uD83D\uDC4B El hierro se absorbe mejor en ayunas o con un vaso de jugo de naranja (vitamina C), evitando l\xE1cteos o caf\xE9 al mismo tiempo."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0'
    }
  }, "Como tambi\xE9n tomas Losart\xE1n, lo ideal es separar ambas tomas por al menos 2 horas para evitar interferencias. \uD83D\uDC8A"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0'
    }
  }, "De igual forma, te sugiero confirmarlo con la Dra. Garc\xEDa en tu pr\xF3xima revisi\xF3n para ajustar el horario a tu rutina. \xBFTe gustar\xEDa que procese tu pedido ahora?")))));
}
function BotMsg({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/easymd-icon.png",
    alt: "",
    style: {
      width: 36,
      height: 36,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '18px 18px 18px 6px',
      padding: '14px 16px',
      maxWidth: '78%',
      color: 'var(--foreground)',
      fontSize: 16,
      lineHeight: 1.45,
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)'
    }
  }, children));
}
function UserMsg({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cta-blue)',
      borderRadius: '18px 18px 6px 18px',
      padding: '13px 18px',
      maxWidth: '78%',
      color: '#fff',
      fontSize: 16,
      fontWeight: 500,
      boxShadow: '0 8px 18px rgba(14,165,233,0.3)'
    }
  }, children));
}
window.Concierge = Concierge;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_app_v2/Concierge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_app_v2/Home.jsx
try { (() => {
// EasyMD patient app (live) — Home screen
const DS = window.EasyMDDesignSystem_91cc9c;
function Home({
  go
}) {
  const tiles = [{
    id: 'concierge',
    icon: 'bot',
    title: 'AI Concierge',
    sub: 'Pregunta lo que quieras',
    bg: '#dcebfb',
    fg: '#0ea5e9'
  }, {
    id: 'farmacia',
    icon: 'pill',
    title: 'Farmacia',
    sub: 'Receta lista — $130',
    bg: '#cdeedd',
    fg: '#10b981'
  }, {
    id: 'labs',
    icon: 'microscope',
    title: 'Mis labs',
    sub: 'Nuevo resultado',
    bg: '#fbebc4',
    fg: '#d97706'
  }, {
    id: 'bienestar',
    icon: 'brain',
    title: 'Bienestar',
    sub: 'Check-in diario',
    bg: '#e6e8f7',
    fg: '#5f68b0'
  }];
  const fam = [{
    i: 'AR',
    c: '#0ea5e9'
  }, {
    i: 'LR',
    c: '#10b981'
  }, {
    i: 'SR',
    c: '#7b84cd'
  }, {
    i: 'MR',
    c: '#f59e0b'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--app-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '8px 20px 28px',
      borderRadius: '0 0 28px 28px',
      overflow: 'hidden',
      background: 'radial-gradient(120% 90% at 16% 8%, rgba(56,189,248,0.22), transparent 46%), linear-gradient(165deg, #14293d 0%, #0c1824 100%)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/easymd-icon.png",
    alt: "",
    style: {
      width: 56,
      height: 56,
      filter: 'drop-shadow(0 4px 14px rgba(14,165,233,0.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Bienvenida a EasyMD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: '#fff'
    }
  }, "\xA1Hola, Ana!")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "A")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 18,
      borderRadius: 18,
      background: 'rgba(14,165,233,0.08)',
      border: '1px solid rgba(56,189,248,0.35)',
      boxShadow: '0 0 24px rgba(14,165,233,0.12) inset'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '3px solid #38bdf8'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: '#38bdf8'
    }
  }, "AI Concierge \xB7 Acci\xF3n pendiente")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#eaf2f8',
      fontSize: 17,
      lineHeight: 1.45,
      marginBottom: 16
    }
  }, "Tu receta de ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Losart\xE1n"), " y ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Hierro"), " est\xE1 lista. \xBFConfirmamos la entrega para hoy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('farmacia'),
    style: {
      flex: 1,
      height: 52,
      border: 'none',
      borderRadius: 14,
      cursor: 'pointer',
      background: 'var(--cta-blue)',
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      boxShadow: '0 10px 22px rgba(14,165,233,0.4)'
    }
  }, "Confirmar \xB7 $130"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('concierge'),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: '#38bdf8',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Detalles")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--muted-foreground)',
      marginBottom: 14
    }
  }, "Acciones r\xE1pidas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => go(t.id),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: 18,
      borderRadius: 20,
      background: '#fff',
      border: '1px solid rgba(16,35,54,0.06)',
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 15,
      background: t.bg,
      color: t.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--foreground)'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)',
      marginTop: 2
    }
  }, t.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--muted-foreground)'
    }
  }, "Mi familia"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--cta-blue)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Ver todos ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 16,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, fam.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: f.i,
    style: {
      marginLeft: i ? -12 : 0,
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: f.c,
      color: '#fff',
      border: '2px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14
    }
  }, f.i))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--foreground)'
    }
  }, "4 miembros"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 4,
      padding: '3px 10px',
      borderRadius: 999,
      background: 'var(--mint-50)',
      color: 'var(--mint-700)',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 14,
      height: 14
    }
  }), " Todo al d\xEDa")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_app_v2/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_app_v2/Labs.jsx
try { (() => {
// EasyMD patient app (live) — Lab results
const DS = window.EasyMDDesignSystem_91cc9c;
function Labs({
  go
}) {
  const rows = [{
    name: 'Hemoglobina',
    value: '12.1 g/dL',
    range: '12.5 — 16.0',
    tone: '#ea7317'
  }, {
    name: 'Hematocrito',
    value: '37%',
    range: '36 — 46',
    tone: '#16a34a'
  }, {
    name: 'Glucosa',
    value: '94 mg/dL',
    range: '70 — 99',
    tone: '#16a34a'
  }, {
    name: 'Colesterol',
    value: '218 mg/dL',
    range: '< 200',
    tone: '#ea7317'
  }, {
    name: 'Ferritina',
    value: '9 ng/mL',
    range: '15 — 150',
    tone: '#ef4444'
  }, {
    name: 'TSH',
    value: '2.1 mU/L',
    range: '0.4 — 4.0',
    tone: '#16a34a'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--app-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(DarkHeader, {
    onBack: () => go('home')
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, "Mis laboratorios"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "GoLab by Medlab \xB7 28 sep 2025"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: 18,
      borderRadius: 18,
      background: '#fbeecb',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "triangle-alert",
    style: {
      width: 24,
      height: 24,
      color: '#c2570c',
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      color: '#a8460b'
    }
  }, "2 valores requieren atenci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#9a5a23',
      marginTop: 3,
      lineHeight: 1.4
    }
  }, "Hemoglobina ligeramente baja y ferritina baja. La Dra. Garc\xEDa ya fue notificada."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(16,35,54,0.05)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: 12,
      padding: '14px 18px',
      background: 'var(--gray-50)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.05em',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "PAR\xC1METRO"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "RESULTADO"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "RANGO")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: 12,
      alignItems: 'center',
      padding: '16px 18px',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 16,
      color: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: r.tone
    }
  }), r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16,
      color: r.tone
    }
  }, r.value), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontSize: 13,
      color: 'var(--subtle-foreground)',
      whiteSpace: 'nowrap'
    }
  }, r.range)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: 20,
      border: '1.5px solid rgba(16,35,54,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--cta-blue)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    style: {
      width: 16,
      height: 16
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--cta-blue)'
    }
  }, "Explicaci\xF3n del AI")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--foreground)'
    }
  }, "Tu ", /*#__PURE__*/React.createElement("strong", null, "hemoglobina"), " est\xE1 un poquito baja y tu ", /*#__PURE__*/React.createElement("strong", null, "ferritina"), " tambi\xE9n. Esto significa que tu cuerpo tiene poca reserva de hierro, lo que puede causar ", /*#__PURE__*/React.createElement("strong", null, "cansancio"), " y dolor de cabeza. La Dra. Garc\xEDa te recet\xF3 hierro \u2014 en ~2 semanas deber\xEDas sentirte con m\xE1s energ\xEDa."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('concierge'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '11px 18px',
      borderRadius: 999,
      background: 'none',
      border: '1.5px solid var(--cta-blue)',
      color: 'var(--cta-blue)',
      cursor: 'pointer',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Preguntar al AI ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })))));
}
window.Labs = Labs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_app_v2/Labs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient_app_v2/Psicologia.jsx
try { (() => {
// EasyMD patient app (live) — Psicología provider list (wellness/violet flow)
const DS = window.EasyMDDesignSystem_91cc9c;
function Psicologia({
  go
}) {
  const docs = [{
    i: 'CM',
    c: '#7b84cd',
    name: 'Dra. Camila Mendoza',
    spec: 'Psicología Clínica',
    rating: '4.9',
    n: '120',
    exp: '8 años de experiencia',
    tags: 'Ansiedad, depresión, trauma',
    price: '$450',
    next: 'Próximo: Hoy, 4:00 PM'
  }, {
    i: 'AH',
    c: '#0ea5e9',
    name: 'Dr. Andrés Herrera',
    spec: 'Psicología Infantil y Adolescente',
    rating: '4.8',
    n: '95',
    exp: '12 años de experiencia',
    tags: 'TDAH, bullying, familia',
    price: '$520',
    next: 'Próximo: Mañana, 9:00 AM'
  }, {
    i: 'VR',
    c: '#7b84cd',
    name: 'Dra. Valeria Ruiz',
    spec: 'Terapia de Pareja',
    rating: '4.7',
    n: '68',
    exp: '6 años de experiencia',
    tags: 'Comunicación, conflicto, divorcio',
    price: '$580',
    next: 'Próximo: Hoy, 6:00 PM'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--app-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg, #eceafb 0%, #f5f3fd 100%)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '8px 20px 18px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: '#fff',
      color: 'var(--serene-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(16,35,54,0.08)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--foreground)'
    }
  }, "Psicolog\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--muted-foreground)'
    }
  }, "Sesiones privadas \xB7 50 min")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--serene-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "heart",
    style: {
      width: 22,
      height: 22
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--serene-600)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " Pre-agendar"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-foreground)',
      fontSize: 15
    }
  }, "Cambiar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, docs.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.i,
    style: {
      background: '#fff',
      borderRadius: 22,
      padding: 20,
      boxShadow: '0 2px 12px rgba(16,35,54,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      flexShrink: 0,
      background: d.c,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 19
    }
  }, d.i), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--foreground)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--muted-foreground)',
      marginBottom: 4
    }
  }, d.spec), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    style: {
      width: 16,
      height: 16,
      color: '#f59e0b',
      fill: '#f59e0b'
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--foreground)'
    }
  }, d.rating), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--subtle-foreground)'
    }
  }, "(", d.n, ")"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--cta-blue)'
    }
  }, d.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, "por sesi\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      margin: '16px 0',
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 16,
      height: 16,
      flexShrink: 0,
      marginTop: 1
    }
  }), d.exp), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, d.tags)), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      height: 52,
      border: 'none',
      borderRadius: 16,
      cursor: 'pointer',
      color: '#fff',
      background: 'linear-gradient(180deg, #7b84cd, #5f68b0)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      boxShadow: '0 10px 22px rgba(95,104,176,0.34)'
    }
  }, "Agendar"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 14,
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, d.next))))));
}
window.Psicologia = Psicologia;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient_app_v2/Psicologia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider_web/Chrome.jsx
try { (() => {
// EasyMD provider web — sidebar + topbar chrome
const DS = window.EasyMDDesignSystem_91cc9c;
function Sidebar({
  view,
  setView
}) {
  const {
    Avatar
  } = DS;
  const nav = [{
    id: 'panel',
    icon: 'layout-dashboard',
    label: 'Panel'
  }, {
    id: 'agenda',
    icon: 'calendar-days',
    label: 'Agenda'
  }, {
    id: 'pacientes',
    icon: 'users',
    label: 'Pacientes'
  }, {
    id: 'recetas',
    icon: 'pill',
    label: 'Recetas'
  }, {
    id: 'mensajes',
    icon: 'message-circle',
    label: 'Mensajes'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/easymd-logo.png",
    alt: "EasyMD",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, nav.map(n => {
    const on = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setView(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-heading)',
        fontSize: 15,
        fontWeight: on ? 600 : 500,
        background: on ? 'var(--color-primary-soft)' : 'transparent',
        color: on ? 'var(--color-primary)' : 'var(--muted-foreground)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": n.icon,
      style: {
        width: 20,
        height: 20
      }
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dra. Ana Ruiz",
    size: 40,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--foreground)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Dra. Ana Ruiz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "Medicina general")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 18,
      height: 18,
      color: 'var(--subtle-foreground)'
    }
  })));
}
function Topbar({
  title
}) {
  const {
    Button,
    IconButton
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 72,
      flexShrink: 0,
      borderBottom: '1px solid var(--border)',
      background: 'var(--background)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 18,
      height: 18,
      color: 'var(--muted-foreground)',
      position: 'absolute',
      left: 12
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar paciente...",
    style: {
      height: 40,
      width: 220,
      padding: '0 12px 0 38px',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notificaciones",
    variant: "outline"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Nueva consulta")));
}
window.Sidebar = Sidebar;
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider_web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider_web/ConsultaRoom.jsx
try { (() => {
// EasyMD provider web — live consultation room
const DS = window.EasyMDDesignSystem_91cc9c;
function ConsultaRoom({
  onEnd
}) {
  const {
    Card,
    Avatar,
    Badge,
    Button,
    Textarea,
    IconButton
  } = DS;
  const vitals = [{
    icon: 'heart-pulse',
    label: 'Frecuencia card.',
    value: '72 bpm'
  }, {
    icon: 'thermometer',
    label: 'Temperatura',
    value: '36.7 °C'
  }, {
    icon: 'gauge',
    label: 'Presión',
    value: '118/76'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      background: 'var(--navy-700)',
      height: 440,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sof\xEDa L\xF3pez",
    size: 104
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 18
    }
  }, "Sof\xEDa L\xF3pez"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    solid: true
  }, "\u25CF En consulta \xB7 03:12")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      width: 132,
      height: 88,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--navy-500)',
      border: '2px solid rgba(255,255,255,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ana Ruiz",
    size: 48
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 10
    }
  }, ['mic', 'video', 'message-square'].map(ic => /*#__PURE__*/React.createElement("button", {
    key: ic,
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.16)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 20,
      height: 20
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onEnd,
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--danger)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone-off",
    style: {
      width: 20,
      height: 20
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    pad: 20,
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 12
    }
  }, "Nota cl\xEDnica"), /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Motivo de consulta, hallazgos, diagn\xF3stico y plan..."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "mint",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "file-plus",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "Emitir receta"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Solicitar laboratorio")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sof\xEDa L\xF3pez",
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--foreground)'
    }
  }, "Sof\xEDa L\xF3pez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, "28 a\xF1os \xB7 Plan Familiar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, vitals.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.label,
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": v.icon,
    style: {
      width: 18,
      height: 18,
      color: 'var(--color-accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 17,
      marginTop: 6,
      color: 'var(--foreground)'
    }
  }, v.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted-foreground)'
    }
  }, v.label))))), /*#__PURE__*/React.createElement(Card, {
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 12
    }
  }, "Motivo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--foreground)',
      marginBottom: 14
    }
  }, "\"Tengo dolor de garganta y un poco de fiebre desde ayer.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 10
    }
  }, "Alergias"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "danger"
  }, "Penicilina"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Sin otras")))));
}
window.ConsultaRoom = ConsultaRoom;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider_web/ConsultaRoom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider_web/Dashboard.jsx
try { (() => {
// EasyMD provider web — dashboard panel
const DS = window.EasyMDDesignSystem_91cc9c;
function Dashboard({
  onAttend
}) {
  const {
    Card,
    Avatar,
    Badge,
    Button
  } = DS;
  const stats = [{
    icon: 'video',
    label: 'Consultas hoy',
    value: '12',
    tone: 'accent'
  }, {
    icon: 'clock',
    label: 'En sala de espera',
    value: '3',
    tone: 'mint'
  }, {
    icon: 'pill',
    label: 'Recetas pendientes',
    value: '5',
    tone: 'accent'
  }, {
    icon: 'star',
    label: 'Satisfacción',
    value: '4.9',
    tone: 'mint'
  }];
  const waiting = [{
    name: 'Sofía López',
    reason: 'Dolor de garganta',
    wait: '2 min',
    tone: 'success'
  }, {
    name: 'Carlos Méndez',
    reason: 'Seguimiento presión',
    wait: '6 min',
    tone: 'warning'
  }, {
    name: 'Lucía Fernández',
    reason: 'Consulta general',
    wait: '9 min',
    tone: 'warning'
  }];
  const agenda = [{
    time: '4:30 pm',
    name: 'Sofía López',
    type: 'Medicina general',
    status: 'Confirmada',
    tone: 'success'
  }, {
    time: '5:15 pm',
    name: 'Marco Díaz',
    type: 'Seguimiento',
    status: 'Confirmada',
    tone: 'success'
  }, {
    time: '6:00 pm',
    name: 'Ana Torres',
    type: 'Primera vez',
    status: 'Pendiente',
    tone: 'warning'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: s.tone === 'mint' ? 'var(--color-secondary-soft)' : 'var(--color-accent-soft)',
      color: s.tone === 'mint' ? 'var(--color-secondary)' : 'var(--color-accent)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--foreground)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 17
    }
  }, "Sala de espera"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    solid: true
  }, waiting.length, " en l\xEDnea")), waiting.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: w.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 20px',
      borderBottom: i < waiting.length - 1 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: w.name,
    size: 42,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, w.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, w.reason)), /*#__PURE__*/React.createElement(Badge, {
    tone: w.tone
  }, w.wait), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onAttend
  }, "Atender")))), /*#__PURE__*/React.createElement(Card, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 17
    }
  }, "Tu agenda de hoy")), agenda.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 20px',
      borderBottom: i < agenda.length - 1 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--color-primary)',
      width: 54
    }
  }, a.time), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--muted-foreground)'
    }
  }, a.type)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone
  }, a.status))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider_web/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/provider_web/ProviderApp.jsx
try { (() => {
// EasyMD provider web — root: chrome + view routing
const DS = window.EasyMDDesignSystem_91cc9c;
function ProviderApp() {
  const [view, setView] = React.useState('panel');
  const [inConsulta, setInConsulta] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const titles = {
    panel: 'Panel',
    agenda: 'Agenda',
    pacientes: 'Pacientes',
    recetas: 'Recetas',
    mensajes: 'Mensajes'
  };
  const title = inConsulta ? 'Consulta · Sofía López' : titles[view] || 'Panel';
  let content;
  if (inConsulta) content = /*#__PURE__*/React.createElement(ConsultaRoom, {
    onEnd: () => setInConsulta(false)
  });else if (view === 'panel') content = /*#__PURE__*/React.createElement(Dashboard, {
    onAttend: () => setInConsulta(true)
  });else content = /*#__PURE__*/React.createElement(Placeholder, {
    title: titles[view]
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--background)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    setView: v => {
      setView(v);
      setInConsulta(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, content)));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--muted-foreground)',
      gap: 12,
      padding: 60
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "construction",
    style: {
      width: 40,
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--foreground)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "Esta vista es parte del kit y a\xFAn no est\xE1 recreada."));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ProviderApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/provider_web/ProviderApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
