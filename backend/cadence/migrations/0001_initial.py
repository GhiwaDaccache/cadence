# Generated by Django 5.0.4 on 2024-05-03 07:26

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('duration', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('level', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=255)),
            ],
        ),
    ]
