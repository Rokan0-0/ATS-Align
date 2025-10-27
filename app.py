"""
Compatibility shim so gunicorn can import the Flask app from the repo root.

Render (and some deployment setups) run `gunicorn app:app` from the project root.
The actual Flask app lives at `backend/app.py` in this repository. This shim
attempts a safe import and falls back to adding `backend/` to sys.path so the
existing module can be loaded without changing the service command.
"""
import os
import sys

try:
    # Preferred: import as package path if possible
    from backend.app import app
except Exception:
    # Fallback: add backend directory to path and import app.py as top-level module
    backend_dir = os.path.join(os.path.dirname(__file__), "backend")
    if backend_dir not in sys.path:
        sys.path.insert(0, backend_dir)
    from app import app

__all__ = ["app"]

if __name__ == "__main__":
    # Run locally for quick smoke tests
    app.run(host="0.0.0.0", port=5000, debug=True)
