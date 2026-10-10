# Exercise 6: Run an existing container and build a new image

In this lab you will download an existing Nginx image, run and inspect its container, change a file inside it, save that change as a new image, and run a second container from the new image.

## 1. Check Docker and download Nginx

Make sure Docker Desktop or the Docker Engine is running, then run:

```bash
docker --version
docker pull nginx:alpine
docker images
```

The image list should include `nginx` with the `alpine` tag.

## 2. Start and inspect a container

```bash
docker run -d --name web-demo -p 8080:80 nginx:alpine
docker ps
docker logs web-demo
```

Open `http://localhost:8080`. You should see the default Nginx welcome page. `-d` runs in the background, `--name` gives the container a readable name, and `-p 8080:80` maps host port 8080 to container port 80.

Check the container's details and shell:

```bash
docker inspect web-demo
docker exec -it web-demo sh
```

At the container prompt, run `exit` to return to your terminal.

## 3. Change the running container

Replace the default page inside the container:

```bash
docker exec web-demo sh -c 'echo "<h1>My first Docker image</h1>" > /usr/share/nginx/html/index.html'
```

Refresh `http://localhost:8080` to see the changed page.

## 4. Save the changed container as an image

```bash
docker commit web-demo my-nginx:1.0
docker images
```

The new `my-nginx:1.0` image contains the page change.

## 5. Run a new container from your image

```bash
docker run -d --name web-demo-copy -p 8081:80 my-nginx:1.0
docker ps
```

Open `http://localhost:8081`; it should show your custom page, even though this is a separate container.

## 6. Stop and clean up

```bash
docker stop web-demo web-demo-copy
docker rm web-demo web-demo-copy
```

The `my-nginx:1.0` image remains on your computer. Remove it with `docker rmi my-nginx:1.0` if you no longer need it. `docker commit` is useful for understanding images; Dockerfiles are the repeatable way to build images in the later lab.
