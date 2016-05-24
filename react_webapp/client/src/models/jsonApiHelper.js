const jsonApiHelper = {
  get: function(url, callback){
    const request = new XMLHttpRequest;
    request.open("GET", url);
    var dataReturned = null;
    request.onload = function(){
      if (request.status === 200){
        dataReturned = JSON.parse(request.responseText);
        if (callback) callback();
      }
    };// [end] request.onload function
    request.send();
    return dataReturned;
  },
  post: function(url, data, callback){
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var responseData = JSON.parse(request.responseText);
        // in store - wrap the dispatch call in a function that is passed to this method as 3rd arg - callback func
        // this.store.dispatch({
        //   type:'ACTION_NAME',
        //   stateDataName: responseData
        // })
        if (callback) callback();
      }
    }
    request.send( JSON.stringify(data) );
  }
}

// module.exports.apiGet = jsonApiHelper.get;
// module.exports.apiPost = jsonApiHelper.post;
let get = jsonApiHelper.get;
let post = jsonApiHelper.post;

export {get as apiGet};
export {post as apiPost};
export {jsonApiHelper};

// export default jsonApiHelper;

