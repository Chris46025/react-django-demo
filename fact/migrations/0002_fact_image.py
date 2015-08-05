# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('fact', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fact',
            name='image',
            field=models.ImageField(default=datetime.datetime(2015, 8, 3, 21, 3, 49, 725201, tzinfo=utc), upload_to=b'images/'),
            preserve_default=False,
        ),
    ]
