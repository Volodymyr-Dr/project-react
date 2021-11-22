export default class PostService {
  static async getAll() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await response.json();
    return json;
  }
  static async getById(id) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    const json = await response.json();
    return json;
  }
  static async getCommentsByPostId(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const json = await response.json();
    return json;
  }
}
