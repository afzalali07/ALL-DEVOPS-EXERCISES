# Exercise 11: Create an AWS EC2 server instance

These steps create a small Linux virtual server in the AWS Console. AWS pricing and console labels can change; review the current cost before launching and stop or terminate resources when you finish.

1. Sign in to the AWS Console and open **EC2** in your chosen region.
2. Select **Launch instance** and give it a name such as `devops-lab-server`.
3. Choose an Amazon Linux image and a small instance type allowed by your account.
4. Create or select a key pair. Download and keep the private key safe; it cannot be downloaded again.
5. In network settings, allow SSH (TCP 22) only from **My IP**. Do not open SSH to everyone.
6. Keep the default storage for this small practice server, review the launch summary, and launch the instance.
7. In **Instances**, wait for the status checks to pass. Copy the instance's public IPv4 address.
8. Connect using the EC2 console's **Connect → EC2 Instance Connect** option, or SSH from your computer with the key pair and the correct default user (commonly `ec2-user` for Amazon Linux).
9. When finished, select the instance and choose **Instance state → Stop instance**. Terminate it when you no longer need it.

Keep the private key private, and avoid assigning unnecessary public access. This exercise creates the server only; later labs install and run Docker on it.
