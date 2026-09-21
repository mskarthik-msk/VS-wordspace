import React, { useState, useRef } from "react";

export default function App() {
  // 1. Ref for the hidden file input
  const fileInputRef = useRef(null);

  // 2. State management
  const [imagePreview, setImagePreview] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(124); // Initial mock count
  const [comments, setComments] = useState([
    { id: 1, text: "Awesome shot! ✨", time: "2h ago" },
    { id: 2, text: "The lighting here is unreal!", time: "1h ago" },
  ]);
  const [commentInput, setCommentInput] = useState("");

  // Handler to trigger hidden file input click using useRef
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handler for image selection & preview creation
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Handler for Like / Unlike toggle
  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  // Handler for submitting a comment
  const handleAddComment = (e) => {
    e.preventDefault();
    const trimmed = commentInput.trim();
    if (!trimmed) return;

    const newComment = {
      id: Date.now(),
      text: trimmed,
      time: "Just now",
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentInput(""); // Clear input field
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.card}>
        {/* Card Header */}
        <div style={styles.cardHeader}>
          <div style={styles.authorGroup}>
            <div style={styles.avatar}>MsK</div>
            <div>
              <h3 style={styles.authorName}>Karthik</h3>
              <span style={styles.authorSubtitle}>Salem, India</span>
            </div>
          </div>

          {/* Change Image Button if image exists */}
          {imagePreview && (
            <button
              onClick={handleUploadClick}
              style={styles.secondaryButton}
              type="button"
            >
              Change Photo
            </button>
          )}
        </div>

        {/* Hidden File Input accessed via useRef */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />

        {/* Image Preview / Upload Dropzone */}
        <div style={styles.mediaContainer}>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Uploaded post preview"
              style={styles.previewImage}
            />
          ) : (
            <div style={styles.uploadPlaceholder} onClick={handleUploadClick}>
              {/* Upload SVG Icon */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6366f1"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p style={styles.uploadText}>No image selected yet</p>
              <button
                type="button"
                style={styles.primaryButton}
                onClick={handleUploadClick}
              >
                Upload Image
              </button>
            </div>
          )}
        </div>

        {/* Action Bar (Like SVG Button & Stats) */}
        <div style={styles.actionRow}>
          <button
            onClick={handleLikeToggle}
            aria-label={isLiked ? "Unlike" : "Like"}
            style={{
              ...styles.iconButton,
              transform: isLiked ? "scale(1.1)" : "scale(1)",
            }}
          >
            {/* Heart SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill={isLiked ? "#ef4444" : "none"}
              stroke={isLiked ? "#ef4444" : "#4b5563"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: "fill 0.2s ease, stroke 0.2s ease",
              }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <span style={styles.likeCounter}>
            <strong>{likeCount}</strong> {likeCount === 1 ? "like" : "likes"}
          </span>
        </div>

        {/* Comments Section */}
        <div style={styles.commentSection}>
          <h4 style={styles.commentHeader}>Comments ({comments.length})</h4>

          {/* Render Comments */}
          <div style={styles.commentsList}>
            {comments.length > 0 ? (
              comments.map((item) => (
                <div key={item.id} style={styles.commentItem}>
                  <p style={styles.commentBody}>
                    <strong style={styles.commentUser}>user_{item.id % 1000}</strong>{" "}
                    {item.text}
                  </p>
                  <span style={styles.commentTime}>{item.time}</span>
                </div>
              ))
            ) : (
              <p style={styles.emptyComments}>
                No comments yet. Be the first to share your thoughts!
              </p>
            )}
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} style={styles.commentForm}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              style={styles.commentInput}
            />
            <button
              type="submit"
              disabled={!commentInput.trim()}
              style={{
                ...styles.postButton,
                opacity: commentInput.trim() ? 1 : 0.45,
                cursor: commentInput.trim() ? "pointer" : "not-allowed",
              }}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Inline Styles (Clean, modern social-media appearance)
const styles = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 12px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow:
      "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
  },
  authorGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#6366f1",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  authorName: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "600",
    color: "#111827",
  },
  authorSubtitle: {
    fontSize: "12px",
    color: "#6b7280",
  },
  secondaryButton: {
    border: "1px solid #d1d5db",
    backgroundColor: "#f9fafb",
    color: "#374151",
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "500",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  mediaContainer: {
    width: "100%",
    minHeight: "360px",
    backgroundColor: "#f8fafc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderTop: "1px solid #f3f4f6",
    borderBottom: "1px solid #f3f4f6",
  },
  previewImage: {
    width: "100%",
    height: "auto",
    maxHeight: "480px",
    objectFit: "cover",
    display: "block",
  },
  uploadPlaceholder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "40px 20px",
    cursor: "pointer",
  },
  uploadText: {
    margin: "4px 0 8px",
    color: "#6b7280",
    fontSize: "14px",
  },
  primaryButton: {
    backgroundColor: "#6366f1",
    color: "#ffffff",
    border: "none",
    padding: "9px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
  },
  actionRow: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px 8px 16px",
    gap: "10px",
  },
  iconButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.15s ease-in-out",
  },
  likeCounter: {
    fontSize: "14px",
    color: "#111827",
  },
  commentSection: {
    padding: "0 16px 16px 16px",
  },
  commentHeader: {
    margin: "8px 0 12px 0",
    fontSize: "13px",
    fontWeight: "600",
    color: "#4b5563",
  },
  commentsList: {
    maxHeight: "150px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "14px",
  },
  commentItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    fontSize: "13px",
    lineHeight: "1.4",
  },
  commentUser: {
    marginRight: "6px",
    color: "#111827",
  },
  commentBody: {
    margin: 0,
    color: "#374151",
    wordBreak: "break-word",
  },
  commentTime: {
    fontSize: "11px",
    color: "#9ca3af",
    marginLeft: "8px",
    flexShrink: 0,
  },
  emptyComments: {
    fontSize: "13px",
    color: "#9ca3af",
    fontStyle: "italic",
    margin: "6px 0",
  },
  commentForm: {
    display: "flex",
    gap: "8px",
    borderTop: "1px solid #f3f4f6",
    paddingTop: "12px",
  },
  commentInput: {
    flex: 1,
    padding: "8px 12px",
    fontSize: "13px",
    border: "1px solid #d1d5db",
    borderRadius: "20px",
    outline: "none",
  },
  postButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#6366f1",
    fontWeight: "600",
    fontSize: "13px",
    padding: "0 8px",
  },
};