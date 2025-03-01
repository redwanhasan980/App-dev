import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const {width} = Dimensions.get('window');

const Community = () => {
  const [selectedTab, setSelectedTab] = useState('post');
  const [commentInput, setCommentInput] = useState(''); // State for comment input
  const [activeCommentId, setActiveCommentId] = useState(null); // Track which comment is active for replying
  const [activePostId, setActivePostId] = useState(null); // Track which post/question is active for commenting

  // Dummy data with interaction counts
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Mohaiminul Islam',
      text: 'This is a post.',
      image: require('./asset/nirob.jpg'),
      likes: 5,
      comments: 2,
      shares: 1,
      showComments: false,
      commentsList: [
        {
          id: 1,
          user: 'Alice Smith',
          userImage: require('./asset/nirob.jpg'),
          text: 'Nice post!',
          likes: 2,
          replies: [],
        },
        {
          id: 2,
          user: 'Bob Williams',
          userImage: require('./asset/nirob.jpg'),
          text: 'Great content!',
          likes: 1,
          replies: [],
        },
      ],
    },
    {
      id: 2,
      name: 'John Doe',
      text: 'Another cool post!',
      image: require('./asset/nirob.jpg'),
      likes: 3,
      comments: 1,
      shares: 0,
      showComments: false,
      commentsList: [
        {
          id: 1,
          user: 'Charlie Brown',
          userImage: require('./asset/nirob.jpg'),
          text: 'Awesome!',
          likes: 0,
          replies: [],
        },
      ],
    },
  ]);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: 'Alice Smith',
      text: 'How do I improve my coding skills?',
      image: require('./asset/nirob.jpg'),
      upvotes: 10,
      downvotes: 2,
      comments: 4,
      shares: 2,
      showComments: false,
      commentsList: [
        {
          id: 1,
          user: 'Bob Williams',
          userImage: require('./asset/nirob.jpg'),
          text: 'Check out freeCodeCamp!',
          likes: 3,
          replies: [],
        },
        {
          id: 2,
          user: 'Charlie Brown',
          userImage: require('./asset/nirob.jpg'),
          text: 'Practice daily!',
          likes: 1,
          replies: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Bob Williams',
      text: 'Best resources for React Native?',
      image: require('./asset/nirob.jpg'),
      upvotes: 7,
      downvotes: 1,
      comments: 3,
      shares: 1,
      showComments: false,
      commentsList: [
        {
          id: 1,
          user: 'Alice Smith',
          userImage: require('./asset/nirob.jpg'),
          text: 'React Native docs are great!',
          likes: 2,
          replies: [],
        },
      ],
    },
  ]);

  const handleInteraction = (
    id: number,
    type: 'likes' | 'comments' | 'shares' | 'upvotes' | 'downvotes',
    isPost: boolean = true,
  ) => {
    if (isPost) {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === id ? {...post, [type]: post[type] + 1} : post,
        ),
      );
    } else {
      setQuestions(prevQuestions =>
        prevQuestions.map(question =>
          question.id === id
            ? {...question, [type]: question[type] + 1}
            : question,
        ),
      );
    }
  };

  const toggleComments = (id: number, isPost: boolean = true) => {
    if (isPost) {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === id ? {...post, showComments: !post.showComments} : post,
        ),
      );
      setActivePostId(post => (post === id ? null : id)); // Toggle active post for comment input
    } else {
      setQuestions(prevQuestions =>
        prevQuestions.map(question =>
          question.id === id
            ? {...question, showComments: !question.showComments}
            : question,
        ),
      );
      setActivePostId(question => (question === id ? null : id)); // Toggle active question for comment input
    }
  };

  const handleCommentLike = (
    postId: number,
    commentId: number,
    isPost: boolean = true,
  ) => {
    if (isPost) {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId
            ? {
                ...post,
                commentsList: post.commentsList.map(comment =>
                  comment.id === commentId
                    ? {...comment, likes: comment.likes + 1}
                    : comment,
                ),
              }
            : post,
        ),
      );
    } else {
      setQuestions(prevQuestions =>
        prevQuestions.map(question =>
          question.id === postId
            ? {
                ...question,
                commentsList: question.commentsList.map(comment =>
                  comment.id === commentId
                    ? {...comment, likes: comment.likes + 1}
                    : comment,
                ),
              }
            : question,
        ),
      );
    }
  };

  const handleAddComment = (
    postId: number,
    isPost: boolean = true,
    parentCommentId = null,
  ) => {
    if (commentInput.trim() === '') return;

    const newComment = {
      id: Date.now(), // Unique ID for the comment
      user: 'Redwan Hasan', // Replace with actual user data
      userImage: require('./asset/nirob.jpg'), // Replace with actual user image
      text: commentInput,
      likes: 0,
      replies: [],
    };

    if (isPost) {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId
            ? {
                ...post,
                commentsList: parentCommentId
                  ? post.commentsList.map(comment =>
                      comment.id === parentCommentId
                        ? {
                            ...comment,
                            replies: [...comment.replies, newComment],
                          }
                        : comment,
                    )
                  : [...post.commentsList, newComment],
                comments: post.comments + 1,
              }
            : post,
        ),
      );
    } else {
      setQuestions(prevQuestions =>
        prevQuestions.map(question =>
          question.id === postId
            ? {
                ...question,
                commentsList: parentCommentId
                  ? question.commentsList.map(comment =>
                      comment.id === parentCommentId
                        ? {
                            ...comment,
                            replies: [...comment.replies, newComment],
                          }
                        : comment,
                    )
                  : [...question.commentsList, newComment],
                comments: question.comments + 1,
              }
            : question,
        ),
      );
    }

    setCommentInput(''); // Clear input
    setActiveCommentId(null); // Close the input section
  };

  const renderComments = (comments, postId, isPost, parentId = null) => {
    return comments.map(comment => (
      <View
        key={comment.id}
        style={[styles.commentItem, parentId && styles.replyComment]}>
        {/* Comment User Info */}
        <View style={styles.commentUserInfo}>
          <Image source={comment.userImage} style={styles.commentUserImage} />
          <Text style={styles.commentUserName}>{comment.user}</Text>
        </View>

        {/* Comment Text */}
        <Text style={styles.commentText}>{comment.text}</Text>

        {/* Comment Actions */}
        <View style={styles.commentActions}>
          <TouchableOpacity
            onPress={() => handleCommentLike(postId, comment.id, isPost)}>
            <Text style={styles.commentActionText}>❤️ {comment.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveCommentId(comment.id)}>
            <Text style={styles.commentActionText}>Reply</Text>
          </TouchableOpacity>
        </View>

        {/* Comment Input Section */}
        {activeCommentId === comment.id && (
          <View style={styles.commentInputContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Write a reply..."
              value={commentInput}
              onChangeText={setCommentInput}
            />
            <TouchableOpacity
              onPress={() => handleAddComment(postId, isPost, comment.id)}>
              <Text style={styles.commentSubmitButton}>Comment</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Render Replies */}
        {comment.replies.length > 0 &&
          renderComments(comment.replies, postId, isPost, comment.id)}
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('./asset/mainlogo.png')} style={styles.logo} />
        </View>
      </View>

      {/* Tab Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'post' && styles.selectedButton,
          ]}
          onPress={() => setSelectedTab('post')}>
          <Text
            style={[
              styles.buttonText,
              selectedTab === 'post' && styles.selectedButtonText,
            ]}>
            POST
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'question' && styles.selectedButton,
          ]}
          onPress={() => setSelectedTab('question')}>
          <Text
            style={[
              styles.buttonText,
              selectedTab === 'question' && styles.selectedButtonText,
            ]}>
            QUESTION
          </Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.contentContainer}>
        {selectedTab === 'post' &&
          posts.map(post => (
            <View key={post.id} style={styles.postCard}>
              {/* User Info */}
              <View style={styles.userInfo}>
                <Image source={post.image} style={styles.userImage} />
                <Text style={styles.userName}>{post.name}</Text>
              </View>

              {/* Post Content */}
              <Text style={styles.postText}>{post.text}</Text>

              {/* Actions */}
              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() => handleInteraction(post.id, 'likes')}>
                  <Text style={styles.actionText}>❤️ {post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleComments(post.id)}>
                  <Text style={styles.actionText}>💬 {post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleInteraction(post.id, 'shares')}>
                  <Text style={styles.actionText}>🔄 {post.shares}</Text>
                </TouchableOpacity>
              </View>

              {/* Show Comments */}
              {post.showComments && (
                <View style={styles.commentSection}>
                  {renderComments(post.commentsList, post.id, true)}

                  {/* Write a Comment Box */}
                  {activePostId === post.id && (
                    <View style={styles.commentInputContainer}>
                      <TextInput
                        style={styles.commentInput}
                        placeholder="Write a comment..."
                        value={commentInput}
                        onChangeText={setCommentInput}
                      />
                      <TouchableOpacity
                        onPress={() => handleAddComment(post.id)}>
                        <Text style={styles.commentSubmitButton}>Comment</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}

        {selectedTab === 'question' &&
          questions.map(question => (
            <View key={question.id} style={styles.postCard}>
              {/* User Info */}
              <View style={styles.userInfo}>
                <Image source={question.image} style={styles.userImage} />
                <Text style={styles.userName}>{question.name}</Text>
              </View>

              {/* Question Content */}
              <Text style={styles.postText}>{question.text}</Text>

              {/* Actions */}
              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() =>
                    handleInteraction(question.id, 'upvotes', false)
                  }>
                  <Text style={styles.actionText}>🔺 {question.upvotes}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    handleInteraction(question.id, 'downvotes', false)
                  }>
                  <Text style={styles.actionText}>🔻 {question.downvotes}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleComments(question.id, false)}>
                  <Text style={styles.actionText}>💬 {question.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    handleInteraction(question.id, 'shares', false)
                  }>
                  <Text style={styles.actionText}>🔄 {question.shares}</Text>
                </TouchableOpacity>
              </View>

              {/* Show Comments */}
              {question.showComments && (
                <View style={styles.commentSection}>
                  {renderComments(question.commentsList, question.id, false)}

                  {/* Write a Comment Box */}
                  {activePostId === question.id && (
                    <View style={styles.commentInputContainer}>
                      <TextInput
                        style={styles.commentInput}
                        placeholder="Write a comment..."
                        value={commentInput}
                        onChangeText={setCommentInput}
                      />
                      <TouchableOpacity
                        onPress={() => handleAddComment(question.id, false)}>
                        <Text style={styles.commentSubmitButton}>Comment</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f8f9fa'},
  header: {
    height: 40,
    backgroundColor: '#b3b6b7',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  logoContainer: {height: 40, width: 80},
  logo: {width: '100%', height: '100%'},
  buttonContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfefe',
  },
  tabButton: {
    width: width / 2 - 50,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {color: '#7f8c8d', fontWeight: 'bold', fontSize: 16},
  selectedButton: {backgroundColor: '#e74c3c'},
  selectedButtonText: {color: '#fff'},
  contentContainer: {padding: 10},
  postCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  userImage: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  userName: {fontSize: 16, fontWeight: 'bold'},
  postText: {fontSize: 14, marginBottom: 10},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionText: {fontSize: 14, fontWeight: 'bold'},
  commentSection: {paddingTop: 5},
  commentItem: {marginBottom: 10},
  replyComment: {marginLeft: 20}, // Indentation for replies
  commentUserInfo: {flexDirection: 'row', alignItems: 'center'},
  commentUserImage: {width: 30, height: 30, borderRadius: 15, marginRight: 10},
  commentUserName: {fontSize: 14, fontWeight: 'bold'},
  commentText: {fontSize: 13, color: '#555', marginLeft: 40},
  commentActions: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 5,
  },
  commentActionText: {fontSize: 12, color: '#555', marginRight: 15},
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 5,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  commentSubmitButton: {color: '#e74c3c', fontWeight: 'bold'},
});
