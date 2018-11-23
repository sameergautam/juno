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
  return view && view.canGoBack();
}

export const viewCanGoForward = (tabId) => {
  const view = document.getElementById(tabId);
  return view && view.canGoForward();
}

export const getWebViewTitle = (tabId) => {
  const view = document.getElementById(tabId);
  return view && view.getTitle();
}

export const autoLogin = (tabId) => {
  const view = document.getElementById(tabId);
  const code = `document.getElementById('user_email').value = 'raman.amatya@cloudfactory.com'; document.getElementById('user_password').value = 'Kathmandu09@'; document.getElementById('user_submit').click();`
  view.executeJavaScript(code);
  return;
}