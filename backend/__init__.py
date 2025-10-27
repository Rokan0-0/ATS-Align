"""
Make `backend` a Python package so intra-package imports work reliably
when the application is imported from the repository root (e.g. via
`gunicorn backend.app:app` or by `import backend.app`).
"""

__all__ = []
