import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Nav = () => {
  return(
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="https://terriblytinytales.com/">
      <img
        alt="Brand"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAAHBwf///8TExMLCwv6+voaGhqBgYHj4+Obm5uoqKjn5+dlZWXW1tYYGBhzc3NfX18gICCUlJTg4ODt7e3z8/NsbGx7e3vDw8NCQkI4ODihoaHOzs4uLi4lJSWGhoa4uLivr69JSUlUVFQ1NTWOjo5AQECbqOwWAAADUklEQVR4nO3c63aiSBiF4SooQQQE5diCx4y5/0scYrqxdAL6rbFXuvV9fqXcpUv2KhCTgFIAAAAAAAAAAAAAAAAAAAAAAACPoI3RN/LxFzDu6PPxosxhu12NTThs/R9jS2dVLd8e/J7+UFrP/XCajk3x8ywZ3hO1imJnqV5iRzyVFd4oa0pZJ11ZFSvrTpQlQFkSlHU/VpYAZQlQlgBlCVCWAGUJ3CxLU5Zxf5kvurIi7dq0lbunsry5nRt1nj83p7Ku8meiXa9nkm5lWeOPh+xcd2WV3tzOXWWsQRo7R+Vd5s9kUwW9pi6KXWBbpqvEGnZ5fZEH1SJtzqNd7rRLO278796+B9LqUE/OnM7EHhdBNJZPJu0/jTOSO/F3b+FDrbez3r7tVs7Msp9FPypr3E6KdnZhuyh351GdO3Fgx7vld2/fQ2lv0Vtvw7C0xh3XuNbgmE/9zUU+V8Z6IImdRtnxxvvu7ftNtDZ3nDqUw3//eYFTB90z3ul38Npm55/nWa4ZmmA+y7rOn9OdZ/CvvLJ6fN0RoCwByhKgLAHKEqAsAcoSoCwByhKgLAHKkqCs+7GyBChLgLIEKEuAsgQoS4CyBChLgLIEKEuAsgQoS4CyJCjrfqwsAcoSoCwByhKgLAHKEqAsAcoSoCyJU1nR2Azu69AzbjINy7FtrcI8GL52Sau0dZpXKUuVWViNXZqUZE69GPx3ZaNWtbN/mbKirGg2IzPeaifz9NDS6oK9065foy3TlTHJIjV8D6x1M8lLNXTU0q5qJsVxMH8qWi+qbj87fFyPaU7c6966/TB+U6rPL3dJo9LY6dru8xv3Lvur6W7pFJM6GZ6xWBZOXM2HYqP80Mm269/x5v5AqyBzwv3SL6OoLEt/e7hYGl2bx8zJd0s/6SZEZVW9X+baS2KnqIPjZ55Uz33vMS+dZUVR5CdFXl0ef7SaH4I+D4usvDxAaWXel3Gf5+FzXW94RWvlvqfHXTwNp3FbN4frCUa5q3S7a6dhmLV18J+72nX5+s2f/cxno18I/n4/j8nzzeLrD7XPMwftbRZfn5Hdyp/M+Qac+stPsy43v34aeP5o/mw+LrU0Y5dW/t8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA83r/I81DoGUR8LAAAAABJRU5ErkJggg=="
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      
    </Navbar.Brand>
  </Navbar>
  <p>By : <a href="https://www.linkedin.com/in/sourav-kr/">Sourav Kumar</a></p>
    </>

  );
} 

export default Nav;
