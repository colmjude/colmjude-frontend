import glob
import os

from setuptools import setup, find_packages

components = []
directories_jinja = glob.glob("colmjude_frontend/**/**/*.jinja", recursive=True)

for directory in directories_jinja:
    components.append(
        os.path.relpath(os.path.dirname(directory), "colmjude_frontend") + "/*.jinja"
    )

setup(
    name="colmjude-frontend",
    version="0.2.6",
    author="Colm Britton",
    description="Reusable frontend code for colmjude.com",
    license="MIT",
    packages=find_packages(exclude=["tests"]),
    package_data={"colmjude-frontend": components},
    python_requires=">=3.5",
    install_requires=["jinja2"],
    include_package_data=True,
    extras_require={"testing": ["pytest", "flake8", "black"]},
)
