# Exercise 12: Run Docker Hello World on AWS EC2

Start with a running Amazon Linux EC2 instance from Exercise 11. Connect to it using EC2 Instance Connect or SSH, then run these commands on the server.

Install and start Docker:

```bash
sudo dnf update -y
sudo dnf install -y docker
sudo systemctl enable --now docker
```

Pull and run the official Hello World image:

```bash
sudo docker pull hello-world
sudo docker run hello-world
sudo docker images
sudo docker ps -a
```

The output should include a message explaining that Docker successfully ran the image. The container exits after printing the message, so it appears under `docker ps -a` rather than `docker ps`.

No inbound application port is needed for this exercise. Stop the EC2 instance when finished to reduce compute charges; terminate it when you no longer need it.
