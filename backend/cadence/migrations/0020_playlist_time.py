# Generated by Django 5.0.4 on 2024-05-15 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cadence', '0019_alter_plan_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='time',
            field=models.CharField(default='10:12', max_length=255),
            preserve_default=False,
        ),
    ]
