export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodedURLComponent(property);
    let encodedValue = encodedURLComponent(params[property]);

    formBody(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&');
}
