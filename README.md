# Apple MacBook Pro Animation Project 🎨

An immersive 3D interactive experience showcasing the Apple MacBook Pro using **React Three Fiber** and **Tailwind CSS**. This project highlights a stunning animation of the MacBook Pro with a scroll-based rotation effect, custom textures, and a responsive interface inspired by Apple's elegant design.

---

## 🌟 Features

- **3D Model Rendering**: The MacBook Pro is rendered using `@react-three/drei` and `@react-three/fiber`.
- **Scroll-based Animation**: Smooth and interactive screen rotation tied to the user's scroll actions.
- **Custom Material Textures**: Applied realistic textures to specific model parts for enhanced visuals.
- **Responsive Design**: Navbar and content styled with Tailwind CSS for seamless adaptability across devices.
- **Real-time Controls**: Integrated with `OrbitControls` for additional model interaction.
- **Dynamic Environment**: HDRI environment lighting for realism using Polyhaven assets.

---

## 🛠️ Technologies Used

- **React.js**: Frontend framework for building the application.
- **React Three Fiber**: A React renderer for Three.js for creating 3D scenes.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Three.js**: 3D rendering library used under the hood.
- **@react-three/drei**: Helper library for Three.js with premade abstractions.
- **React Icons**: For adding Apple-inspired icons.

---

## 📂 Project Structure

```plaintext
.
├── public/
│   ├── mac.glb          # 3D model of the MacBook Pro
│   ├── red.jpg          # Custom texture for the screen or matte surface
├── src/
│   ├── components/
│   │   ├── MacContainer.js # 3D model rendering and animation logic
│   ├── App.js             # Main app entry point
│   ├── style.css          # Custom Tailwind styles
├── tailwind.config.js    # Tailwind CSS configuration
├── README.md             # Project documentation
```

## 🎮 Usage

- **Scroll**: Use the mouse wheel or scroll gesture to rotate the MacBook screen.
- **Zoom/Rotate**: Use OrbitControls to explore the 3D model.
- **Navbar**: Interact with the Apple-inspired navbar for UI navigation (static links).

---

---

## 🛠️ Customization

### Updating the 3D Model
Replace `mac.glb` in the `public/` directory with your own `.glb` file.

### Changing the Texture
Update the `red.jpg` file in the `public/` directory with your preferred texture.

---

## 🌐 Resources

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Polyhaven HDRIs](https://polyhaven.com/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open a pull request or raise an issue for suggestions or bugs.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 🧑‍💻 Author

**Shahdin Salman**  
[GitHub](https://github.com/shahdinsalman23) | [LinkedIn](https://www.linkedin.com/in/shahdinsalman)

---

## ⭐ Acknowledgements

- 3D model inspired by [Apple MacBook Pro](https://www.apple.com/macbook-pro/).
- HDRI lighting by [Polyhaven](https://polyhaven.com/).


