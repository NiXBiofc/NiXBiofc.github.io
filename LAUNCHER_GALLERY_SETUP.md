# Launcher screenshot gallery

The gallery has no hardcoded visible slide titles or captions. It displays images listed in `assets/launcher/screenshots.json`.

You can add any number of images (PNG, JPG/JPEG, WEBP, GIF) to `assets/launcher/`, then add an entry for each image to the JSON manifest. The filename can be anything. `alt` is for accessibility and is not shown as a caption.

Example:
```json
{ "src": "assets/launcher/my-shot.webp", "alt": "Launcher settings" }
```
