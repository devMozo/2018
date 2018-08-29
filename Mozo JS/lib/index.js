/**
 * SINGLETON
 */

const SingletonPlaceholder = (function () {
 
  let instance;
 
  async function init() {

    function getUserById(userID){
        return fetch('https://jsonplaceholder.typicode.com/users/' + userID)
                    .then(response => response.json())
                    .catch(err => console.log(err));
    }

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                      .then(response => response.json())
                      .catch(err => console.log(err)); 

    for(let i = 0; i < posts.length; i++){
        posts[i]['user'] = await getUserById(posts[i]['userId'])
    }
    
    return posts
  }
 
  return {
 
     getInstance: function () {

        if (!instance) {
            instance = init();
        }
 
        return instance;
    } 
  };

})();

/**
 *  POST'S CONSTRUCTOR
 */

class Post{

    constructor(owner, postID, title, body) {
        this.owner = owner;
        this.postID = postID;
        this.title = title;
        this.body = body;
    }

    getHTML() {
        return `<li>
                    <p>
                        <b> ${ this.title } </b>
                        <i> by ${ this.owner.name } </i>
                    </p>
                    <p>
                        ${ this.body }
                    </p>
                </li>
                `
    }
}

class WrapperPost{

    constructor(idWrapper) {
        this.arrPosts = [];
        this.wrapperElement = document.querySelector('#' + idWrapper);
    }

    add(post){
        this.arrPosts.push(post);
        this.wrapperElement.innerHTML += post.getHTML();
    }
}

const wrapper = new WrapperPost('list_fake_placeholder');

SingletonPlaceholder.getInstance()
    .then(posts => {
        posts.forEach(element => {
            let newPost = new Post(element.user, element.id, element.title, element.body);    
            wrapper.add(newPost);
        })
    })
    .catch(err => console.log(err));