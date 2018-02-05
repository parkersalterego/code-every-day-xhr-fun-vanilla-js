document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  
  // create xhr object
  const xhr = new XMLHttpRequest();
  console.log('READYSTATE', xhr.readyState);

  // OPEN 
  xhr.open('GET', 'data.txt', true);
  console.log('READYSTATE', xhr.readyState);

  // optional for spinners and loaders
  xhr.onprogress = function() {
    console.log('ONPROGRESS', xhr.readyState);
  };

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `
        <h1>${this.responseText}</h1>
      `
    }
  };

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function() {
    console.log('request error...');
  };

  xhr.send();

  //readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response ready 

  //HTTP statuses 
  //200: "OK"
  //403: "Forbidden"
  //404: "Not Found"
}