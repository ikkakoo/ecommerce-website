# Generated by Django 4.1.1 on 2022-09-20 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='overview',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='specs',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
