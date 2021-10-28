---
layout: post
title:  "Kubernetes"
date:   2021-01-21 01:27:15 +0200
categories: DevOps
---
In this page you'll find `Kubernetes` commands and other useful information.

<style>
.tablelines table, .tablelines td, .tablelines th {
        border: 1px solid black;
        }
</style>

### Installation

[Install kubect for linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
[Install kubect for windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)
[Install minikube for windows](https://minikube.sigs.k8s.io/docs/start/)

Having VirtualBox and minikube with Docker installed on the Windows-host might be a problem.
If VirtualBox does not work do the following:

Open a cmd with admin privilige.
Run the following command to disable Hyper-V in Windows.

`bcdedit /set hypervisorlaunchtype off`

Reboot Windows

### Commands

| **Command**  | **What does it do?** |
|:-------------:|:-------------:|
| `kubectl cluster-info`                                 | Check how the cluster is set up                           |
| `kubectl get all`                                      | Check all resources                                       |
| `kubectl get all -o wide`                              | Check all resources with more information                 |
| `kubectl get nodes`                                    | Check the nodes in k8s cluster                            |
| `kubectl get nodes -o wide`                            | Check the nodes in k8s cluster with more info             |
| `kubectl get pods`                                     | Check the pods in k8s cluster                             |
| `kubectl get pods -o wide`                             | Check the pods and see in which node the pod is scheduled |
| `kubectl get deployments`                              | List all the deployments running                          |
| `kubectl get deployments -o wide`                      | List all the deployments running with more info           |
| `kubectl get deployment my-deployment -o yaml`         | Check the specific deployment as a yaml                   |
| `kubectl get services`                                 | List all the services running                             |
| `kubectl get namespaces`                               | List all the namespaces                                   |
| `kubectl get services -o wide`                         | List all the services running with more info              |
| `kubectl get services -l app=nginx-app`                | List the service related to the app specified             |
| `kubectl create -f deployment-definition.yml`          | Create a deployment from the yml file                     |
| `kubectl expose deployment my-deployment --type=NodePort` | Exposing the deployment as a service of type NodePort. This makes the deployment accessible from outside the cluster   |
|`http://<public-node-ip>:<node-port>`|Use the node address and node port to access the application|
| `kubectl create -f service-definition.yml`             | Create a service from the yml file                        |
| `kubectl describe svc my-service`                      | Check all the detail of the services                      |
| `kubectl delete svc my-service`                        | Delete the services, this deletes the pods as well        |
| `kubectl taint nodes node-name key=value:taint-effect` | Taint a node so pods can not be put inside it             |
| `kubetct taint nodes node1 app=blu:NoSchedule`         | Example of tainting a node                                |
| `kubectl describe node kubemaster | grep Taint`        | not sure                                                  |
{: .tablelines}

We can create many deployments and Services with a single yaml file.
We use the `---` 3-dash notation to separate them in the file and than call:
`kubectl create -f <file-name>.yaml`

### Deployment

#### Example yml file for a Deployment.

```sh
apiVersion: apps/v1
kind: Deployment
metadata:
	name: redis-master
	labels:
		app:redis
spec:
	replicas: 1
	selector: 
		matchLabels:
			app: redis
			role: master
			tier: backend
	template:
		metadata:
			labels:
				app: redis
				role: master
				tier: backend
		speck:
			containers:
				-name: master
				 image: <name of the image>
				 resources:
					requests:
						cpu:100m
						memory:100Mi
				 ports:
					-containerPort: 8002
```

### Services

## Example yml file for a NodePort service

```
#Service
#nginx-svc-np.yml
apiVersion: v1
kind: Service
metadata:
	name: my-service
	labels:
		app: nginx-app
spec:
	selector:
		app: nginx-app
	type: NodePort
	port: 
		-nodePort: 30008
		 port: 80
		 targetPort: 80
```
