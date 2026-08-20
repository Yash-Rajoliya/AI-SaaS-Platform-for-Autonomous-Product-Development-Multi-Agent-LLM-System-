from setuptools import setup, find_packages

setup(
    name="ai-platform-sdk",
    version="1.0.0",
    description="Autonomous AI Platform Python SDK",
    author="AI Platform",
    python_requires=">=3.10",
    packages=find_packages(),
    install_requires=[
        "httpx>=0.28.0",
        "pydantic>=2.11.0",
        "tenacity>=9.0.0",
        "websockets>=15.0"
    ],
)