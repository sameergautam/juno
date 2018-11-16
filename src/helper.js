export const goForward = () => {
  const view = document.getElementById('view');
  view.goForward();
}

export const goBack = () => {
  const view = document.getElementById('view');
  view.goBack();
}

export const reloadUrl = () => {
  const view = document.getElementById('view');
  view.reload();
}

export const loadUrl = (value) => {
  const view = document.getElementById('view');
  view.loadURL(value);
}

export const getWebViewSrc = () => {
  const view = document.getElementById('view');
  return view.src;
}

export const viewCanGoBack = () => {
  const view = document.getElementById('view');
  if (view) return view.canGoBack();
}

export const viewCanGoForward = () => {
  const view = document.getElementById('view');
  if (view) return view.canGoForward();
}