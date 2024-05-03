# Generated by Django 5.0.4 on 2024-05-03 12:24

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cadence', '0004_run'),
    ]

    operations = [
        migrations.CreateModel(
            name='Segment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('distance', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('duration', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('pace', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('run', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cadence.run')),
            ],
            options={
                'db_table': 'segments',
            },
        ),
    ]
