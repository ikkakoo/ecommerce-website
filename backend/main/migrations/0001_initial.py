# Generated by Django 4.1.1 on 2022-09-13 14:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('brand', models.CharField(blank=True, max_length=255, null=True)),
                ('category', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('rating', models.DecimalField(decimal_places=3, max_digits=7)),
                ('num_reviews', models.IntegerField(blank=True, default=0, null=True)),
                ('price', models.DecimalField(decimal_places=3, max_digits=7)),
                ('count_in_stock', models.IntegerField(blank=True, default=0, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
