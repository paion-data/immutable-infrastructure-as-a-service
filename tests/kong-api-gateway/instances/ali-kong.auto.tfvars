ali_image_name = "ecs-kong"
# image_home_dir             = "/root"
instance_type              = "ecs.e-c1m1.large"
instance_name              = "kong-instance"
security_group_names       = ["dental-llm-gateway"]
internet_charge_type       = "PayByBandwidth"
system_disk_category       = "cloud_essd_entry"
internet_max_bandwidth_out = 1