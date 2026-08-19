FROM ghcr.io/cirruslabs/flutter:stable

WORKDIR /mobile

COPY . .

RUN flutter pub get

RUN flutter analyze

RUN flutter build web --release

CMD ["bash"]