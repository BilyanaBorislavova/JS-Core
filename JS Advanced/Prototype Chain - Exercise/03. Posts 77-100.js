function posts() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            let result = '';
            result += `Post: ${this.title}\n`;
            result += `Content: ${this.content}\n`;
            return result;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let parentStr = super.toString();
            parentStr += `Rating: ${this.likes - this.dislikes}\n`;
            if(this.comments.length > 0) {
                parentStr += `Comments:\n`;
                for (let comment of this.comments) {
                    parentStr += ` * ${comment}\n`;
                }
            }
            return parentStr;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            let parentStr = super.toString();
            parentStr += `Views: ${this.views}`;
            return parentStr;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let test = SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
