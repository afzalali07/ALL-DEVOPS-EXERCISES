# Exercise 7: Manage containers and transfer files

Practice creating, starting, stopping, renaming, and inspecting a container; tag an image; and copy files in both directions. This lab uses Alpine Linux and its small shell.

## 1. Download the image and create a container

```bash
docker pull alpine:latest
docker images
docker run -dit --name lab-box alpine:latest sh
docker ps
```

The container stays running because it was started interactively with a shell and detached with `-d`.

## 2. Stop, start, rename, and inspect it

```bash
docker stop lab-box
docker ps -a
docker start lab-box
docker rename lab-box my-lab-box
docker ps
docker inspect my-lab-box
```

`docker ps` lists running containers; `docker ps -a` also lists stopped containers.

## 3. Copy a file from the container to your computer

Create a file inside the container and copy it into this exercise folder:

```bash
docker exec my-lab-box sh -c 'echo "Hello from the container" > /tmp/message.txt'
docker cp my-lab-box:/tmp/message.txt ./message-from-container.txt
```

Open `message-from-container.txt` on your computer to check its contents.

## 4. Copy a file from your computer to the container

This folder includes `host-note.txt`. Copy it in, then read it from the container:

```bash
docker cp ./host-note.txt my-lab-box:/tmp/host-note.txt
docker exec my-lab-box cat /tmp/host-note.txt
```

## 5. Tag an image

Tags give the same image another name or version label. This command does not create a second copy of all image data:

```bash
docker tag alpine:latest my-alpine:1.0
docker images
```

Look for both `alpine:latest` and `my-alpine:1.0` in the image list.

## 6. Clean up

```bash
docker stop my-lab-box
docker rm my-lab-box
```

The tagged image remains local. Remove it with `docker rmi my-alpine:1.0` if you no longer need it.
