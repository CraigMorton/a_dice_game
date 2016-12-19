const jsonApiHelper = {
  get: function(url, callback){
    var request = new XMLHttpRequest;
    request.open("GET", url);
    var dataReturned;
    request.onload = function(){
      if (request.status === 200){
        dataReturned = JSON.parse(request.responseText);
        console.log("data from API:", dataReturned);
        if (callback != null) callback(dataReturned);
        return dataReturned;
      }
    };// [end] request.onload function
    request.send();
  },
  post: function(url, data, callback){
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        console.log("POST responseText:", request.responseText);
        var responseData = JSON.parse(request.responseText);
        // in store - wrap the dispatch call in a function that is passed to this method as 3rd arg - callback func
        // this.store.dispatch({
        //   type:'ACTION_NAME',
        //   stateDataName: responseData
        // })
        console.log("POST JSONparsed responseText:", responseData);
        if (callback != null) callback(responseData);
        return responseData
      }
    }
    console.log(data);
    request.send( JSON.stringify(data) );
  }
}
let get = jsonApiHelper.get;
let post = jsonApiHelper.post;

export {get as apiGet};
export {post as apiPost};
export {jsonApiHelper};