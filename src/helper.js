export const goForward = () => {
  const view = document.getElementById('view');
  view.goForward();
  return false;
}

export const goBack = () => {
  const view = document.getElementById('view');
  view.goBack();
}

export const reloadUrl = () => {
  const view = document.getElementById('view');
  view.reload();
}

export const updateUrl = (value) => {
  const view = document.getElementById('view');
  view.loadURL(value);
}