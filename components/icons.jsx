function base(props, children) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch(props) {
  return base(
    props,
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </>
  );
}

export function IconFlame(props) {
  return base(
    props,
    <path d="M12 22c4.4 0 7.5-3 7.5-7.2 0-3.1-1.7-5.3-3.2-6.9-.4 1.2-1 2.3-2 3.1.3-2.7-.8-5.9-2.3-8C10.4 4.6 9 6.6 9 9c-1.4-.5-2.4-1.7-3-3.5C4.7 7.2 4.5 9.4 4.5 11 4.5 17 7.6 22 12 22z" />
  );
}

export function IconMail(props) {
  return base(
    props,
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="M2 7l10 6 10-6" />
    </>
  );
}

export function IconArrow(props) {
  return base(
    props,
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </>
  );
}

export function IconMenu(props) {
  return base(
    props,
    <>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </>
  );
}

export function IconClose(props) {
  return base(
    props,
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  );
}

export function IconClock(props) {
  return base(
    props,
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 13.5" />
    </>
  );
}

export function IconCheck(props) {
  return base(props, <polyline points="4 12.5 10 18.5 20 6.5" />);
}

export function IconPin(props) {
  return base(
    props,
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  );
}

export function IconChevron(props) {
  return base(props, <polyline points="6 9 12 15 18 9" />);
}

export function IconLink(props) {
  return base(
    props,
    <>
      <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
    </>
  );
}

export function IconNews(props) {
  return base(
    props,
    <>
      <path d="M4 5h13v14H6a2 2 0 0 1-2-2V5z" />
      <path d="M17 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2" />
      <line x1="7" y1="9" x2="14" y2="9" />
      <line x1="7" y1="12.5" x2="14" y2="12.5" />
    </>
  );
}
