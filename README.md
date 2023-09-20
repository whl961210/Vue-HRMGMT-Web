# Cloud E-Office Online Office System

The Cloud E-Office Online Office System is a system designed to manage daily office affairs. It facilitates management in a more straightforward, flattened, efficient, and standardized manner, enhancing the overall management and operational level.

## Features

The system manages various aspects including:
- Finance
- Personnel
- Expenses
- Assets
- Administration
- Projects
- Mobile office and more

## Technical Architecture

The project adopts the mainstream front-end and back-end separation development mode, utilizing the following technologies:
- Spring Boot
- Vue
- Redis
- Websocket

## Installation Guide

1. Create a `yeb` database and execute the SQL file.
2. Modify your database and port configurations in the configuration file.
3. To use the change personal center avatar feature, you need to find the `FastDFSUtils` package version 1.29 online, as it is not available in the Maven repository.
4. The default administrator login credentials are:
   - **Username:** admin
   - **Password:** 123
5. To fetch all menu details, you need to enable Redis since menu information is stored in the cache. Failure to enable Redis will result in errors.
6. If you cannot clearly see the login verification code, you can find it printed in the IDEA console after retrieval.
7. All requests require user login authentication before access is granted.

Thank you for using the Cloud E-Office Online Office System. We hope it enhances your management efficiency and operational standards.
