---
sidebar_position: 5
title: Development
---

Setup
-----

### Getting Source Code

```console
git clone git@github.com:paion-data/immutable-infrastructure-as-a-service.git
```

### Installing Docker for Test

IIaaS tests infrustructure codes by deploying things into Docker container and running integration tests against it.
Docker is thus required. Here are the links to the instructions for common OS's:

- [Mac](https://docs.docker.com/desktop/install/mac-install/)
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Linux](https://github.com/QubitPi/docker-install)

Troubleshooting
---------------

### CI/CD

### Packer Files Linting Job Failed

We lint all Packer and Terraform configuration files in each CI/CD run.

![Error loading](./img/packer-fmt-error.png)

```console
cd immutable-infrastructure-as-a-service
packer fmt -write -recursive .
```

### Terraform Files Linting Job Failed

```console
cd immutable-infrastructure-as-a-service
terraform fmt -write -recursive
```
