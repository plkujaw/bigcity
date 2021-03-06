class Comment {
  constructor(content, author = "anonymous") {
    this.content = content;
    this.author = author;
    this.timestamp = getTimestamp();
    function getTimestamp() {
      return new Date().toLocaleString("tr-TR");
    }
  }
  isEmpty() {
    const content = this.content;
    const regex = /\S+/g; // matches any non-whitespace character
    const match = content.match(regex) || []; // we use || [] because match returns null if there is no match and throws an error
    if (match.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  hasNoAuthor() {
    const author = this.author;
    const regex = /\S+/g; // matches any non-whitespace character
    const match = author.match(regex) || []; // we use || [] because match returns null if there is no match and throws an error
    if (match.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default Comment;
