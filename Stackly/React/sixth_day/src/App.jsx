import { useEffect, useRef, useState } from 'react';
import './style.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Icon({ name, size = 18 }) {
  const icons = {
    upload: '↑', people: '♧', mail: '✉', phone: '⌕', web: '↗', building: '▦', retry: '↻', image: '▧', check: '✓'
  };
  return <span className={`icon icon-${name}`} style={{ fontSize: size }}>{icons[name]}</span>;
}

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [fileName, setFileName] = useState('');
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const getUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('We could not load the team directory.');
      setUsers(await response.json());
    } catch (err) {
      setError(err.message || 'Something went wrong while loading users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    async function loadUsers() {
      setLoading(true);
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('We could not load the team directory.');
        setUsers(await response.json());
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Something went wrong while loading users.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadUsers();
    return () => controller.abort();
  }, []);

  const selectImage = () => fileInputRef.current?.click();
  const onImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Please choose an image file (PNG, JPG, GIF, or WebP).');
      return;
    }
    setUploadError('');
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <main className="page-shell">

      <section className="hero">
        <h1>Your people, <em>in one place.</em></h1><br></br><hr></hr>
      </section>

      <section className="content-grid" aria-label="Team workspace">
        <aside className="upload-panel">
          <div className="panel-heading"><span className="heading-icon"><Icon name="image" /></span><div><p className="section-kicker">YOUR PROFILE</p><h2>Profile image</h2></div></div>
          <div className={`image-dropzone ${imagePreview ? 'has-image' : ''}`}>
            {imagePreview ? <img src={imagePreview} alt="Selected profile preview" /> : <div className="empty-preview"><span className="image-placeholder"><Icon name="image" size={28} /></span><strong>Upload a photo</strong><small>PNG, JPG or WEBP · up to 10MB</small></div>}
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={onImageChange} hidden />
          <button className="upload-button" type="button" onClick={selectImage}><Icon name="upload" />{imagePreview ? 'Change image' : 'Choose an image'}</button>
          {fileName && <p className="file-confirmation"><Icon name="check" /> {fileName}</p>}
          {uploadError && <p className="upload-error">{uploadError}</p>}
          <p className="upload-note">Your image stays on this device until you choose to save it.</p>
        </aside>

        <section className="directory-panel">
          {/* <div className="directory-heading"> */} 
                                          {/*member count alignment*/}
          <div className='member_mention'>
            <div><p className="section-kicker">TEAM MEMBERS</p>
            <h2>People directory</h2>
            </div>
            <span className="member-count">{loading ? 'Loading…' : `${users.length} members`}</span>
            </div>
          {loading && <div className="state-box loading-state"><span className="loader" /><p>Gathering the directory…</p></div>}
          {error && !loading && <div className="state-box error-state"><strong>Unable to load users</strong><p>{error}</p><button type="button" onClick={getUsers}><Icon name="retry" /> Try again</button></div>}
          {!loading && !error && <div className="user-grid">
            {users.map((user) => <article className="user-card" key={user.id}>
              <div className="card-top">
                {/* <span className="avatar">{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span> */}
                <h3>{user.name}</h3><p>@{user.username}</p>
              </div>
              <dl>
                <div><dt>
                  {/* <Icon name="mail" /> */}
                  Email</dt><dd><a href={`mailto:${user.email}`}>{user.email}</a></dd></div>
                <div><dt>
                  {/* <Icon name="phone" /> */}
                  Phone</dt><dd>{user.phone}</dd></div>
                <div><dt>
                  {/* <Icon name="web" /> */}
                  Website</dt><dd><a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></dd></div>
              </dl>
              <footer><Icon name="building" /><span>{user.company.name}</span></footer>
            </article>)}
          </div>}
        </section>
      </section>
    </main>
  );
}

export default App;
