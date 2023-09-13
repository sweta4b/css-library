React-Component-Library is a versatile component library designed to simplify web development and elevate your projects. With a carefully curated collection of resuable components. It empowers developers to create beautiful and consistent user interfaces effortlessly

To install React-Component-Library, you can follow these steps:

1.  **Open a Terminal or Command Proompt:** Open your terminal or command prompt application. Make sure you have Node.js and npm installed on your system.
2.  **Navigate to Your Directory:** Use the **`cd`** command to navigate to your React project directory where you want to install.

```
cd path/to/your/project
```

4.  **Install the library:** Use the **`npm install sb-react-component-library`** or **`npm i sb-react-component-library`** to install.

```
npm install sb-react-component-library
                    Or
npm i sb-react-component-library
```

6.  **Import and Use the Library:** Once the installation is complete, you can import and use the library in your project.

```
import React from 'react'
import Avatar from 'sb-react-component-library/dist/Avatar/Avatar'

function App() {
    return (
        <div className='app'>
             <Avatar src="./logo.png" size="avatar sm"/>
        </div>
    )
}

export default App

```