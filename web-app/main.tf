# main.tf

# AWS Provider Configuration
provider "aws" {
  region = "us-east-1"
}

# Example API Gateway Resource
resource "aws_api_gateway_rest_api" "example-api" {
  name        = "api-1"
  description = "Example API Gateway"
}

# Example RDS Resource
resource "aws_db_instance" "example_rds" {
  identifier     = "rds-1"
  instance_class = "db.t2.micro"  # Add the instance class you desire
  # Add more configuration as needed
}

# Example Lambda Resource
resource "aws_lambda_function" "example_lambda" {
  function_name = "example_lambda_function"
  handler      = "example_lambda.handler"
  runtime      = "nodejs14.x"
  role         = aws_iam_role.lambda_role.arn  # Replace with the ARN of your IAM role
  # Add more configuration as needed
}

# EC2 Module
module "ec2" {
  source = "./ec2"  # Path to the directory containing your ec2.tf file
}

# ec2.tf

resource "aws_instance" "example" {
  ami           = "ami-0c7217cdde317cfec"
  instance_type = "t2.micro" # Choose the instance type according to your requirements

  tags = {
    Name = "ec2-1"
  }
}

# Debug statements
output "debug_lambda_arn" {
  value = aws_lambda_function.example_lambda.arn
}

output "debug_rds_id" {
  value = aws_db_instance.example_rds.id
}

output "debug_api_id" {
  value = aws_api_gateway_rest_api.example-api.id
}
