---
sidebar_position: 4
title: General Troubleshooting
---

Troubleshooting
===============

This section discusses the common issue that can happen during all types of deployments.

Alicloud
--------

### "No alicloud image was found matching filters"

Given a used-to-be-valid Ali ECS image, such as `ubuntu_22_04_x64_20G_alibase_20240322.vhd`, we could randomly see this
error:

```console
10:47:42 ==> install-react.alicloud-ecs.react-app: No alicloud image was found matching filters:
ubuntu_22_04_x64_20G_alibase_20240322.vhd
10:47:42 Build 'install-react.alicloud-ecs.react-app' errored after 1 second 882 milliseconds: No alicloud image was
found matching filters: ubuntu_22_04_x64_20G_alibase_20240322.vhd
```

This is because "images can become deprecated after a while". Alicloud periodically wipes out old images which becomes
unavailable then. **The solution is to replace the old image with an up-to-date image ID**. There are multiple options:

- [Alicloud API](https://help.aliyun.com/zh/ecs/user-guide/find-an-image)
- [`aliyun ecs DescribeImages`](https://developer.hashicorp.com/packer/integrations/hashicorp/alicloud/latest/components/builder/alicloud-ecs#basic-example)
