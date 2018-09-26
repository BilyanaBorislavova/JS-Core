function requestValidator(obj) {
  let validObject = {method: obj.method,
      uri: obj.uri,
      version: obj.version,
      message: obj.message
  };

  if(!obj.hasOwnProperty('method')){
      throw new Error("Invalid request header: Invalid Method")
  } else if(!obj.hasOwnProperty('uri')){
      throw new Error("Invalid request header: Invalid URI")
  } else if(!obj.hasOwnProperty('version')){
      throw new Error("Invalid request header: Invalid Version")
  } else if(!obj.hasOwnProperty('message')){
      throw new Error("Invalid request header: Invalid Message")
  }

  let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  if(!validMethods.includes(validObject.method)) {
      throw new Error("Invalid request header: Invalid Method")
  }

  let uriRegex = /^[\w.]+$/;
  if(!validObject.uri.match(uriRegex)){
      throw new Error("Invalid request header: Invalid URI")
  }

  let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if(!validVersions.includes(validObject.version) || validObject.uri === ''){
      throw new Error("Invalid request header: Invalid Version")
  }

  let messageRegex = /^[^<>\\&'"]+$/;
  if(!validObject.message.match(messageRegex) && validObject.message !== ''){
      throw new Error("Invalid request header: Invalid Message")
  }

 return validObject;
}

console.log(requestValidator(({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    })
));