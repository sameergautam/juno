export const goForward = (tabId) => {
  const view = document.getElementById(tabId);
  view.goForward();
}

export const goBack = (tabId) => {
  const view = document.getElementById(tabId);
  view.goBack();
}

export const reloadUrl = (tabId) => {
  const view = document.getElementById(tabId);
  view.reload();
}

export const loadUrl = (tabId, value) => {
  const view = document.getElementById(tabId);
  view.loadURL(value);
}

export const getWebViewSrc = (tabId) => {
  const view = document.getElementById(tabId);
  return view.src;
}

export const viewCanGoBack = (tabId) => {
  const view = document.getElementById(tabId);
  if (view) return view.canGoBack();
}

export const viewCanGoForward = (tabId) => {
  const view = document.getElementById(tabId);
  if (view) return view.canGoForward();
}