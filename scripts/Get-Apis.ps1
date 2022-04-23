kubectl proxy --port=8080 &

curl http://localhost:8080/apis/ | Out-File apis.json

curl http://localhost:8080/apis/node.k8s.io/v1 | Out-File node.k8s.io.json
curl http://localhost:8080/api/v1/nodes | Out-File api-nodes.json

curl http://localhost:8080/apis/helm.toolkit.fluxcd.io/v2beta1 | Out-File apis-helm.toolkit.fluxcd.io.json
curl http://localhost:8080/apis/helm.toolkit.fluxcd.io/v2beta1/helmreleases | Out-File apis-helm.toolkit.fluxcd.io-helmreleases.json
curl http://localhost:8080/apis/helm.toolkit.fluxcd.io/v2beta1/gitrepository | Out-File apis-helm.toolkit.fluxcd-gitrepository.json

curl http://localhost:8080/apis/source.toolkit.fluxcd.io/v1beta1 | Out-File source.toolkit.fluxcd.io.json
curl http://localhost:8080/apis/source.toolkit.fluxcd.io/v1beta1/gitrepositories | Out-File source.toolkit.fluxcd.io-gitrepositories.json

