// Post.sol
pragma solidity ^0.8.0;

contract Post {
    struct PostData {
        string text;
        string image;
    }

    PostData[] public posts;

    event PostAdded(string text, string image);

    function addPost(string memory _text, string memory _image) public {
        posts.push(PostData(_text, _image));
        emit PostAdded(_text, _image);
    }

    function getPost(uint256 _index) public view returns (string memory text, string memory image) {
        require(_index < posts.length, "Post does not exist");
        return (posts[_index].text, posts[_index].image);
    }
}
