# Generated by Django 5.0.4 on 2024-05-06 14:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cadence', '0012_rename_playlist_favoriteplaylist_playlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recordedrun',
            name='real_distance',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0)]),
        ),
        migrations.AlterField(
            model_name='recordedrun',
            name='real_duration',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0)]),
        ),
        migrations.AlterField(
            model_name='recordedrun',
            name='real_pace',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]
